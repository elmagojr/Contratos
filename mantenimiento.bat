@echo off
set "ruta=%~dp0\plantilla\mantenimiento.html"
set "chrome_exe=C:\Program Files\Google\Chrome\Application\chrome.exe"
    set "edge_exe=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
        set "brave_exe=C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
            set "opera_exe=%LOCALAPPDATA%\Programs\Opera\opera.exe"

if exist "%chrome_exe%" (
  echo Usando Chrome...  
  start chrome --new-window --disable-prompt-on-repost --app="%ruta%" 
) else (
        echo Chrome No instalado... 
        if exist "%edge_exe%" (
              echo Usando Edge...
            start msedge --new-window --disable-prompt-on-repost --app="%ruta%" 
        ) else (
            echo Edge No instalado... 
            if exist "%brave_exe%" (
                  echo Usando Brave... 
            start brave --new-window --disable-prompt-on-repost --app="%ruta%" 
            ) else (
                 echo Brave No instalado...
                         if exist "%opera_exe%" (
                            echo Usando Opera Mini... 
                            start opera "%ruta%"
                         ) else (
                             echo Opera Mini No instalado...
                            echo Instale un Navegador Compatible: Chrome o Edge o Brave u Opera.
                            pause
                         )            
            )
        )
)
