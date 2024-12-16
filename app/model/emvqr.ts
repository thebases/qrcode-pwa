interface EMVQR {
    // Payload Format Indicator (ID: 00)
    F00_PAYLOAD_FORMAT_INDICATOR: string;

    // Point of Initiation Method (ID: 01)
    F01_POINT_OF_INITIATION_METHOD?: '11' | '12';

    // Merchant Account Information (ID: 26-51)
    [key: `F${number}_MERCHANT_ACCOUNT_INFO`]: {
        F00_GLOBAL_UNIQUE_IDENTIFIER: string;
        F01_PAYMENT_NETWORK_SPECIFIC: string;
        [key: string]: string;
    };

    // Merchant Category Code (ID: 52)
    F52_MERCHANT_CATEGORY_CODE: string;

    // Transaction Currency (ID: 53)
    F53_TRANSACTION_CURRENCY: string;

    // Transaction Amount (ID: 54)
    F54_TRANSACTION_AMOUNT?: string;

    // Tip or Convenience Indicator (ID: 55)
    F55_TIP_OR_CONVENIENCE_INDICATOR?: '01' | '02' | '03';

    // Value of Convenience Fee Fixed (ID: 56)
    F56_CONVENIENCE_FEE_FIXED?: string;

    // Value of Convenience Fee Percentage (ID: 57)
    F57_CONVENIENCE_FEE_PERCENTAGE?: string;

    // Country Code (ID: 58)
    F58_COUNTRY_CODE: string;

    // Merchant Name (ID: 59)
    F59_MERCHANT_NAME: string;

    // Merchant City (ID: 60)
    F60_MERCHANT_CITY: string;

    // Postal Code (ID: 61)
    F61_POSTAL_CODE?: string;

    // Additional Data Field Template (ID: 62)
    F62_ADDITIONAL_DATA?: {
        F01_BILL_NUMBER?: string;
        F02_MOBILE_NUMBER?: string;
        F03_STORE_LABEL?: string;
        F04_LOYALTY_NUMBER?: string;
        F05_REFERENCE_LABEL?: string;
        F06_CUSTOMER_LABEL?: string;
        F07_TERMINAL_LABEL?: string;
        F08_PURPOSE_OF_TRANSACTION?: string;
        F09_ADDITIONAL_CONSUMER_DATA_REQUEST?: string;
        [key: `F${number}_${string}`]: string | undefined;
    };

    // CRC (ID: 63)
    F63_CRC: string;

    // Merchant Information Language Template (ID: 64)
    F64_MERCHANT_INFORMATION_LANGUAGE_TEMPLATE?: {
        F00_LANGUAGE_PREFERENCE: string;
        F01_MERCHANT_NAME_ALTERNATE_LANGUAGE: string;
        F02_MERCHANT_CITY_ALTERNATE_LANGUAGE: string;
        [key: `F${number}_${string}`]: string | undefined;
    };


}

