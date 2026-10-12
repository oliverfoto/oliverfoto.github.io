@echo off
rem Nahraje vsechny zmeny webu na GitHub. Staci na tenhle soubor dvakrat kliknout.
cd /d "%~dp0"

rem Ulozi zmeny (pokud nejake jsou)
git add -A
git diff --cached --quiet
if errorlevel 1 git commit -q -m "Aktualizace webu %date% %time:~0,5%"

rem Odesle na GitHub vse, co tam jeste neni
git push -u origin main
if errorlevel 1 (
  echo.
  echo CHYBA: Nahrani se nepovedlo, podivej se na chybu vyse.
  goto konec
)

echo.
echo Hotovo! Web se na GitHub Pages aktualizuje do 1-2 minut.

:konec
echo.
pause
