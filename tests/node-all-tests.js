/*
 * PhET-OSC Bridge All Node.js Tests
 * http://github.com/fluid-studios/phet-osc-bridge
 *
 * Copyright 2017, OCAD University
 * Licensed under the New BSD license.
 */

"use strict";

var fluid = require("infusion");
fluid.require("%phet-osc-bridge/src/js/event-filter.js");
fluid.require("%phet-osc-bridge/src/js/phet-converter.js");
fluid.require("%phet-osc-bridge/tests/js/conversion-tester.js");

require("./js/phet-converter-tests.js");
