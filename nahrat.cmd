@echo off
rem Nahraje vsechny zmeny webu na GitHub. Staci na tenhle soubor dvakrat kliknout.
cd /d "%~dp0"

git add -A
git diff --cached --quiet
if not errorlevel 1 (
  echo Neni co nahrat, od posledniho nahrani se nic nezmenilo.
  goto konec
)

git commit -q -m "Aktualizace webu %date% %time:~0,5%"
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
