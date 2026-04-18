@echo off
setlocal

set "PHP_EXE=C:\xampp\php\php.exe"

if not exist "%PHP_EXE%" (
  echo PHP XAMPP introuvable : "%PHP_EXE%"
  echo Verifie que XAMPP est installe dans C:\xampp
  exit /b 1
)

cd /d "%~dp0"
echo Demarrage du serveur PHP XAMPP sur http://localhost:8000
echo Arrete la fenetre pour stopper le serveur.
"%PHP_EXE%" -S localhost:8000
