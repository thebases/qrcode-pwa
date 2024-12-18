'use client'

import mqtt from 'mqtt'

class MQTTClient {
    private static instance: mqtt.MqttClient | null = null
    private static subscribers: Map<string, (message: string) => void> = new Map()

    static getInstance(): mqtt.MqttClient {
        if (!this.instance) {
            this.instance = mqtt.connect('mqtt://mqtt.thebase.vn:1883', {
                username: 'thebase',
                password: 'Thebase24',
                clientId: `qr-client-${Math.random().toString(16).substring(2, 10)}`
            })

            this.instance.on('connect', () => {
                console.log('Connected to MQTT broker')
            })

            this.instance.on('message', (topic, message) => {
                const callback = this.subscribers.get(topic)
                if (callback) {
                    callback(message.toString())
                }
            })

            this.instance.on('error', (err) => {
                console.error('MQTT Error:', err)
            })
        }

        return this.instance
    }

    static subscribe(topic: string, callback: (message: string) => void) {
        const client = this.getInstance()
        client.subscribe(topic)
        this.subscribers.set(topic, callback)
    }

    static publish(topic: string, message: string) {
        const client = this.getInstance()
        client.publish(topic, message)
    }

    static unsubscribe(topic: string) {
        const client = this.getInstance()
        client.unsubscribe(topic)
        this.subscribers.delete(topic)
    }
}

export default MQTTClient

