# galago-test-task
<details><summary>Change history</summary>

## 17.09.2020 — start
```
Created vue-cli project.
```

## 18.09.2020 — upd 0.0.1
```
Added vuex;
Created components MainUsersTable and MainUsersTableButton.
```

## 20.09.2020 — upd 0.0.2
```
Added vue-the-mask and vuejs-datepicker dependencies;
Created component MainForm;
Created helper function validMail;
Created mixin formFieldMixin and components BaseFormField, BaseFormText,
BaseFormTel, BaseFormSelect, BaseFormDate;
Added core-js and regenerator-runtime dependencies;
Changed .browserslistrc;
Added transpiling for vuejs-datepicker at vue.config.js;
Other minor edits.
```
## 20.09.2020 — upd 0.0.3
```
Created component AppPagination.
```
## 21.09.2020 — upd 0.0.4
```
Added loading users from localStorage;
Other minor edits.
```
## 22.09.2020 — upd 0.0.5
```
Added find of mask for input type="tel";
Started layout working;
Other minor edits.
```
## 23.09.2020 — upd 0.0.6
```
Layout change;
Other minor edits.
```
## 24.09.2020 — upd 0.0.7
```
Created filter for naming of users count (usersDeclension.js);
Created telephone masks catalog (telMask.js);
Improved AppPagination component;
Layout change;
Other minor edits.
```
## 24.09.2020 — upd 0.0.8
```
Layout change;
Other minor edits.
```
## 25.09.2020 — upd 0.0.9
```
Layout change;
Added support of layout for IE10, IE11;
Other minor edits.
```
## 25.09.2020 — upd 0.1.0
```
Added animation;
Other minor edits.
```
## 30.09.2020 — upd 0.1.1
```
Added page's reset after sort.
```
## 05.09.2020 — upd 0.1.2
```
Deleted default property "options";
Added task description.
```
## 19.10.2020 — upd 0.1.3
```
Removed unnecessary;
Renamed components;
Changed the way to validate the phone number.
```
</details>

## Demo
[Watch the demo](https://timshaq.github.io/galago-test-task/).

### Task description
Task description is available [here](public/тестовое%20задание%20на%20фронтенда.docx "тестовое задание на фронтенда.docx").

### Used packets (vue-components)
```
vue-the-mask — ver. 0.11.1;
vuejs-datepicker — ver. 1.6.2.

All list of packets look in package.json.
```
### Used librries
```
Libphonenumber by Google.

All list of packets look in package.json.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
