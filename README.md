# Reproducing setTimout().unref()


Logs:

```
❯ nw --enable-logging=stderr nw-dev
[0606/151446.945402:ERROR:zip.cc(179)] Cannot open '/Users/noname4u/Downloads/nwjs-v0.64.0-osx-x64/nwjs.app/Contents/Resources/app.nw': FILE_ERROR_NOT_FOUND: No such file or directory (2)
[0606/151446.945848:ERROR:zip.cc(179)] Cannot open '/Users/noname4u/Downloads/nwjs-v0.64.0-osx-x64/package.nw': FILE_ERROR_NOT_FOUND: No such file or directory (2)
[69195:259:0606/151447.235491:WARNING:account_consistency_mode_manager.cc(70)] Desktop Identity Consistency cannot be enabled as no OAuth client ID and client secret have been configured.
[69195:259:0606/151447.287039:WARNING:push_messaging_service_factory.cc(37)] PushMessagingService could not be built because InstanceID is unexpectedly disabled
[69195:259:0606/151448.518999:INFO:CONSOLE(5)] "Uncaught TypeError: setInterval(...).unref is not a function", source: chrome-extension://abhlndelipnlmflamhcnklkcomjiehkl/main.js (5)
[69195:259:0606/151449.020414:INFO:CONSOLE(4)] "hello world!", source: chrome-extension://abhlndelipnlmflamhcnklkcomjiehkl/main.js (4)
```
