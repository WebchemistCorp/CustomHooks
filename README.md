# React Custom-Hooks

## List

- useInput
- useQueryString
- useFetch

## Before

```
vi ~/.npmrc

@webchemistcorp:registry=https://npm.pkg.github.com/
```

## Install

```bash
npm install --save @webchemistcorp/custom-hooks
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from '@webchemistcorp/custom-hooks'
import 'custom-hooks/dist/index.css'

const Example: React.FC = () => {
  return <MyComponent />
}
```

## License

MIT © [WebchemistGenn](https://github.com/WebchemistGenn)
