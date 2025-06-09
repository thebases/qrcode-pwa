copy .\build\*.* .\out
rmdir /s /q .\build
rmdir /s /q .\bean-zalo-app.thebase.vn
rename .\out bean-zalo-app.thebase.vn
tar -czvf bean-zalo-app.tar.gz .\bean-zalo-app.thebase.vn
scp bean-zalo-app.tar.gz bean:/var/www/html/ && ssh bean  "cd /var/www/html/ && rm -rf bean-zalo-app.thebase.vn && tar -xvzf bean-zalo-app.tar.gz && rm bean-zalo-app.tar.gz"

