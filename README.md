# cylonjs-examples

# How to install and configure Cylon.js for Raspberry Pi

## Installing packages

```bash
$ npm install cylon cylon-raspi cylon-firmata cylon-gpio cylon-i2c
```

## Connecting to Raspberry Pi GPIO

Taken from [official Cylon.js For Raspberry Pi documentation](https://github.com/hybridgroup/cylon-raspi#cylonjs-for-raspberry-pi):
> In order to access the GPIO pins without using `sudo` you will need to both app the pi user to the `gpio` group.

```bash
$ sudo usermod -G gpio pi
```

For more information go to [official Cylon.js For Raspberry Pi documentation](https://github.com/hybridgroup/cylon-raspi#cylonjs-for-raspberry-pi)
