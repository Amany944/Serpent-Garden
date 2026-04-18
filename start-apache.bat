@echo off
setlocal

set "HTTPD_EXE=C:\xampp\apache\bin\httpd.exe"
set "PROJECT_URL=http://localhost/serpent-garden/"

if not exist "%HTTPD_EXE%" (
  echo Apache XAMPP introuvable : "%HTTPD_EXE%"
  echo Verifie que XAMPP est installe dans C:\xampp
  exit /b 1
)

echo Demarrage d'Apache XAMPP...
start "" "%HTTPD_EXE%"
timeout /t 2 /nobreak >nul
echo Ouverture du projet dans le navigateur...
start "" "%PROJECT_URL%"
