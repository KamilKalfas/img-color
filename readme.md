# img-color
> Get dominant color of image directly from url

[![Build Status](https://travis-ci.org/KamilKalfas/img-color.svg?branch=master)](https://travis-ci.org/KamilKalfas/img-color)
[![npm](https://img.shields.io/npm/dt/img-color.svg)](https://www.npmjs.com/package/img-color)
[![npm](https://img.shields.io/npm/v/img-color.svg)](https://www.npmjs.com/package/img-color)

## Install

```
$ npm install img-color
```

## Usage

```javascript
const color = require('img-color');
color.getDominantColor(url)
  .then(json => console.log(json))
  .catch(err => console.error(err));
```
## Output
returns json object wher _key_ is `dColor` and _value_ `hex formated color` 
```json
{ dColor: 'ffc20c' }
```
