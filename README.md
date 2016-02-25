#Whitepages PRO API url generator

---

This is a web application, which generates Whitepages.com PRO API urls.

## Demo
You can test a fully working live demo at [http://whitepages.sanyisd.org](http://whitepages.sanyisd.org)


## Getting Started

To get you started you can simply clone the web-whitepages.test-source repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You also need number of node.js tools to initialize and test the application. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  The tools help
to manage and test the application.

* You can get the tools we depend upon via `npm`, the [node package manager][npm].
* You can get the angular code via `bower`, a [client-side code package manager][bower].

`npm` is preconfigured to automatically run `bower` so you can simply do:

```
npm install
```

### Run the Application

The simplest way to start this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

### Contribute

When you change the code, you need to run `gulp watch` to generate the js and css files. The required modules are installed automatically by `npm install`.

```
gulp watch
```

## Authors

* Gergely Kovacs


## License

This project is licensed under the MIT License.


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org