# create reactjs app

npx create-react-app my-app
cd my-app
npm start

## install support scss

npm i --save-dev node-sass

## install routing-dom

npm i --save react-router-dom
ex:

```js
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
```

## Custom Field

Formik

Yup

- Cầu nối giữa UI control và Formik.
- UI control là một controlled component với props:
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

```js
function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
```

## install UI lib

npm install bootstrap --save
npm i --save reactstrap

### deploy sever free

-Build reactjs app with production mode
npm run build

-Move to build folder
cd build

-Clone index.html into 200.html
cp index.html 200.html

-Start deploying via Surge
-The command means deploy current folder to domain paul-photo-app.surge.sh
surge . paul-photo-app.surge.sh

### folder structure

├───.vscode
├───public
└───src
├───@types
├───apis
├───App
├───assets
│ └───images
├───components
│ ├───Header
│ └───SideNav
├───constants
├───guards
├───helpers
├───hooks
├───layouts
├───pages
│ ├───Home
│ ├───Login
│ └───Product
│ ├───ProductItem
│ └───ProductList
├───reducer
├───routes
└───store
