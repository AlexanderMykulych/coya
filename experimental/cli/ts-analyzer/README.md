oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ts-analyzer
$ ts-analyzer COMMAND
running command...
$ ts-analyzer (--version)
ts-analyzer/0.0.0 linux-x64 node-v14.17.5
$ ts-analyzer --help [COMMAND]
USAGE
  $ ts-analyzer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ts-analyzer hello PERSON`](#ts-analyzer-hello-person)
* [`ts-analyzer hello world`](#ts-analyzer-hello-world)
* [`ts-analyzer help [COMMAND]`](#ts-analyzer-help-command)
* [`ts-analyzer plugins`](#ts-analyzer-plugins)
* [`ts-analyzer plugins:inspect PLUGIN...`](#ts-analyzer-pluginsinspect-plugin)
* [`ts-analyzer plugins:install PLUGIN...`](#ts-analyzer-pluginsinstall-plugin)
* [`ts-analyzer plugins:link PLUGIN`](#ts-analyzer-pluginslink-plugin)
* [`ts-analyzer plugins:uninstall PLUGIN...`](#ts-analyzer-pluginsuninstall-plugin)
* [`ts-analyzer plugins update`](#ts-analyzer-plugins-update)

## `ts-analyzer hello PERSON`

Say hello

```
USAGE
  $ ts-analyzer hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/AlexanderMykulych/coya/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ts-analyzer hello world`

Say hello world

```
USAGE
  $ ts-analyzer hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ts-analyzer help [COMMAND]`

Display help for ts-analyzer.

```
USAGE
  $ ts-analyzer help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ts-analyzer.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `ts-analyzer plugins`

List installed plugins.

```
USAGE
  $ ts-analyzer plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ts-analyzer plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `ts-analyzer plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ts-analyzer plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ts-analyzer plugins:inspect myplugin
```

## `ts-analyzer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ts-analyzer plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ts-analyzer plugins add

EXAMPLES
  $ ts-analyzer plugins:install myplugin 

  $ ts-analyzer plugins:install https://github.com/someuser/someplugin

  $ ts-analyzer plugins:install someuser/someplugin
```

## `ts-analyzer plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ts-analyzer plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ts-analyzer plugins:link myplugin
```

## `ts-analyzer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ts-analyzer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts-analyzer plugins unlink
  $ ts-analyzer plugins remove
```

## `ts-analyzer plugins update`

Update installed plugins.

```
USAGE
  $ ts-analyzer plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
