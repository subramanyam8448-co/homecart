@echo off
echo ==========================================
echo       Pushing HomeCart to GitHub
echo ==========================================

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/download/win
    echo After installing, close and reopen this window.
    pause
    exit /b
)

echo [INFO] Initializing Repository...
git init
if %errorlevel% neq 0 echo [WARN] Init failed or repo exists.

echo [INFO] Adding Remote (If not exists)...
git remote add origin https://github.com/Vishaldo-Projects/HomeCart.git
:: Ignore error if remote already exists

echo [INFO] Adding files...
git add .

echo [INFO] Committing files...
git commit -m "Initial commit of HomeCart"

echo [INFO] Renaming branch to main...
git branch -M main

echo [INFO] Pushing to GitHub...
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed. 
    echo Possible reasons:
    echo  1. You are not authenticated.
    echo  2. The repository url is incorrect.
    echo  3. The remote repository already has history (try 'git pull origin main' first).
) else (
    echo.
    echo [SUCCESS] Code pushed successfully!
)

pause
