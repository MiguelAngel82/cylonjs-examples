# Executing API example

## Open admin webpage.

In order to acces to the webpage application where you can manage your "robot", you can go to `http://<Raspberry Pi IP>:<configured port>/`. 
If a port is not configured, `3000` will be used as default port.

## Toggle a LED

In this example, there is a LED configured, that can be toggled with the following URL:

`http://<Raspberry Pi IP>:<configured port>/api/robots/Test/devices/redLed/commands/toggle`

In this case, `Test` is the name of the "robot" and `redLed` is the name of the driver that is plugged in on PIN number 11.
