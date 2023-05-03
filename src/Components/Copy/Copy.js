import React, { useState } from "react";

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const cssText = `
  body {
    margin: 0;
    padding: 0;
  }
  
  /* ALL COLOR */
  /* ALL BACKGROUND-COLOR */
  /* ALL DISPLAY */
  /* ALL POSITION */
  /* ALL MARGIN */
  /* ALL MARGIN TOP */
  /* ALL MARGIN RIGHT */
  /* ALL MARGIN BOTTOM */
  /* ALL MARGIN LEFT */
  /* ALL PADDING */
  /* ALL PADDING TOP */
  /* ALL PADDING RIGHT */
  /* ALL PADDING BOTTOM */
  /* ALL PADDING LEFT */
  /* ALL FONT-SIZE */
  /* ALL TEXT-ALIGN /*
  /* ALL FONT-WEIGHT /*
  /* ALL JUSTIFY-CONTENT /*
  /* ALL JUSTIFY-SELF /*
  /* ALL JUSTIFY-ITEMS /*
  /* ALL TEXT-TRANSFORM */
  /* ALL TEXT-DECORATION */
  /* ALL RESPONSIVE GRID */
  /* BUTTON */
  /* CENTER A ELEMENT */
  /* BORDER-RADIUS */
  /* WIDTH */
  /* HEIGHT */
  
  
  
  
  /* ALL COLOR */
  /* ALL COLOR */
  /* ALL COLOR */
  
  .blue {
    color: blue;
  }
  
  .aliceblue {
    color: aliceblue;
  }
  
  .antiquewhite {
    color: antiquewhite;
  }
  
  .aqua {
    color: aqua;
  }
  
  .azure {
    color: azure;
  }
  
  .beige {
    color: beige;
  }
  
  .bisque {
    color: bisque;
  }
  
  .black {
    color: black;
  }
  
  .blanchedalmond {
    color: blanchedalmond;
  }
  
  .blueviolet {
    color: blueviolet;
  }
  
  .brown {
    color: brown;
  }
  
  .burlywood {
    color: burlywood;
  }
  
  .cadetblue {
    color: cadetblue;
  }
  
  .chartreuse {
    color: chartreuse;
  }
  
  .chocolate {
    color: chocolate;
  }
  
  .coral {
    color: coral;
  }
  
  .cornflowerblue {
    color: cornflowerblue;
  }
  
  .cornsilk {
    color: cornsilk;
  }
  
  .crimson {
    color: crimson;
  }
  
  .cyan {
    color: cyan;
  }
  
  .darkblue {
    color: darkblue;
  }
  
  .darkcyan {
    color: darkcyan;
  }
  
  .darkgoldenrod {
    color: darkgoldenrod;
  }
  
  .darkgray {
    color: darkgray;
  }
  
  .darkgreen {
    color: darkgreen;
  }
  
  .darkgrey {
    color: darkgrey;
  }
  
  .darkkhaki {
    color: darkkhaki;
  }
  
  .darkmagenta {
    color: darkmagenta;
  }
  
  .darkolivegreen {
    color: darkolivegreen;
  }
  
  .darkorange {
    color: darkorange;
  }
  
  .darkorchid {
    color: darkorchid;
  }
  
  .darkred {
    color: darkred;
  }
  
  .darksalmon {
    color: darksalmon;
  }
  
  .darkseagreen {
    color: darkseagreen;
  }
  
  .darkslateblue {
    color: darkslateblue;
  }
  
  .darkslategray {
    color: darkslategray;
  }
  
  .darkslategrey {
    color: darkslategrey;
  }
  
  .darkturquoise {
    color: darkturquoise;
  }
  
  .darkviolet {
    color: darkviolet;
  }
  
  .deeppink {
    color: deeppink;
  }
  
  .deepskyblue {
    color: deepskyblue;
  }
  
  .dimgray {
    color: dimgray;
  }
  
  .dimgrey {
    color: dimgrey;
  }
  
  .dodgerblue {
    color: dodgerblue;
  }
  
  .firebrick {
    color: firebrick;
  }
  
  .floralwhite {
    color: floralwhite;
  }
  
  .forestgreen {
    color: forestgreen;
  }
  
  .fuchsia {
    color: fuchsia;
  }
  
  .gainsboro {
    color: gainsboro;
  }
  
  .ghostwhite {
    color: ghostwhite;
  }
  
  .gold {
    color: gold;
  }
  
  .goldenrod {
    color: goldenrod;
  }
  
  .gray {
    color: gray;
  }
  
  .green {
    color: green;
  }
  
  .greenyellow {
    color: greenyellow;
  }
  
  .grey {
    color: grey;
  }
  
  .honeydew {
    color: honeydew;
  }
  
  .hotpink {
    color: hotpink;
  }
  
  .indianred {
    color: indianred;
  }
  
  .indigo {
    color: indigo;
  }
  
  .ivory {
    color: ivory;
  }
  
  .khaki {
    color: khaki;
  }
  
  .lavender {
    color: lavender;
  }
  
  .lavenderblush {
    color: lavenderblush;
  }
  
  .lawngreen {
    color: lawngreen;
  }
  
  .lemonchiffon {
    color: lemonchiffon;
  }
  
  .lightblue {
    color: lightblue;
  }
  
  .lightcoral {
    color: lightcoral;
  }
  
  .lightcyan {
    color: lightcyan;
  }
  
  .lightgoldenrodyellow {
    color: lightgoldenrodyellow;
  }
  
  .lightgray {
    color: lightgray;
  }
  
  .lightgreen {
    color: lightgreen;
  }
  
  .lightgrey {
    color: lightgrey;
  }
  
  .lightpink {
    color: lightpink;
  }
  
  .lightsalmon {
    color: lightsalmon;
  }
  
  .lightseagreen {
    color: lightseagreen;
  }
  
  .lightskyblue {
    color: lightskyblue;
  }
  
  .lightslategray {
    color: lightslategray;
  }
  
  .lightslategrey {
    color: lightslategrey;
  }
  
  .lightsteelblue {
    color: lightsteelblue;
  }
  
  .lightyellow {
    color: lightyellow;
  }
  
  .lime {
    color: lime;
  }
  
  .limegreen {
    color: limegreen;
  }
  
  .linen {
    color: linen;
  }
  
  .magenta {
    color: magenta;
  }
  
  .maroon {
    color: maroon;
  }
  
  .mediumaquamarine {
    color: mediumaquamarine;
  }
  
  .mediumblue {
    color: mediumblue;
  }
  
  .mediumorchid {
    color: mediumorchid;
  }
  
  .mediumpurple {
    color: mediumpurple;
  }
  
  .mediumseagreen {
    color: mediumseagreen;
  }
  
  .mediumslateblue {
    color: mediumslateblue;
  }
  
  .mediumspringgreen {
    color: mediumspringgreen;
  }
  
  .mediumturquoise {
    color: mediumturquoise;
  }
  
  .mediumvioletred {
    color: mediumvioletred;
  }
  
  .midnightblue {
    color: midnightblue;
  }
  
  .mintcream {
    color: mintcream;
  }
  
  .mistyrose {
    color: mistyrose;
  }
  
  .moccasin {
    color: moccasin;
  }
  
  .navajowhite {
    color: navajowhite;
  }
  
  .navy {
    color: navy;
  }
  
  .oldlace {
    color: oldlace;
  }
  
  .olive {
    color: olive;
  }
  
  .olivedrab {
    color: olivedrab;
  }
  
  .orange {
    color: orange;
  }
  
  .orangered {
    color: orangered;
  }
  
  .orchid {
    color: orchid;
  }
  
  .palegoldenrod {
    color: palegoldenrod;
  }
  
  .palegreen {
    color: palegreen;
  }
  
  .paleturquoise {
    color: paleturquoise;
  }
  
  .palevioletred {
    color: palevioletred;
  }
  
  .papayawhip {
    color: papayawhip;
  }
  
  .peachpuff {
    color: peachpuff;
  }
  
  .peru {
    color: peru;
  }
  
  .pink {
    color: pink;
  }
  
  .plum {
    color: plum;
  }
  
  .powderblue {
    color: powderblue;
  }
  
  .purple {
    color: purple;
  }
  
  .rebeccapurple {
    color: rebeccapurple;
  }
  
  .red {
    color: red;
  }
  
  .rosybrown {
    color: rosybrown;
  }
  
  .royalblue {
    color: royalblue;
  }
  
  .saddlebrown {
    color: saddlebrown;
  }
  
  .salmon {
    color: salmon;
  }
  
  .sandybrown {
    color: sandybrown;
  }
  
  .seagreen {
    color: seagreen;
  }
  
  .seashell {
    color: seashell;
  }
  
  .sienna {
    color: sienna;
  }
  
  .silver {
    color: silver;
  }
  
  .skyblue {
    color: skyblue;
  }
  
  .slateblue {
    color: slateblue;
  }
  
  .slategray {
    color: slategray;
  }
  
  .slategrey {
    color: slategrey;
  }
  
  .snow {
    color: snow;
  }
  
  .springgreen {
    color: springgreen;
  }
  
  .steelblue {
    color: steelblue;
  }
  
  .tan {
    color: tan;
  }
  
  .teal {
    color: teal;
  }
  
  .thistle {
    color: thistle;
  }
  
  .tomato {
    color: tomato;
  }
  
  .transparent {
    color: transparent;
  }
  
  .turquoise {
    color: turquoise;
  }
  
  .violet {
    color: violet;
  }
  
  .wheat {
    color: wheat;
  }
  
  .white {
    color: white;
  }
  
  .whitesmoke {
    color: whitesmoke;
  }
  
  .yellow {
    color: yellow;
  }
  
  .yellowgreen {
    color: yellowgreen;
  }
  
  /* ALL BACKGROUND COLOR */
  /* ALL BACKGROUND COLOR */
  /* ALL BACKGROUND COLOR */
  
  .bg-blue {
    background-color: blue;
  }
  
  .bg-aliceblue {
    background-color: aliceblue;
  }
  
  .bg-antiquewhite {
    background-color: antiquewhite;
  }
  
  .bg-aqua {
    background-color: aqua;
  }
  
  .bg-azure {
    background-color: azure;
  }
  
  .bg-beige {
    background-color: beige;
  }
  
  .bg-bisque {
    background-color: bisque;
  }
  
  .bg-black {
    background-color: black;
  }
  
  .bg-blanchedalmond {
    background-color: blanchedalmond;
  }
  
  .bg-blueviolet {
    background-color: blueviolet;
  }
  
  .bg-brown {
    background-color: brown;
  }
  
  .bg-burlywood {
    background-color: burlywood;
  }
  
  .bg-cadetblue {
    background-color: cadetblue;
  }
  
  .bg-chartreuse {
    background-color: chartreuse;
  }
  
  .bg-chocolate {
    background-color: chocolate;
  }
  
  .bg-coral {
    background-color: coral;
  }
  
  .bg-cornflowerblue {
    background-color: cornflowerblue;
  }
  
  .bg-cornsilk {
    background-color: cornsilk;
  }
  
  .bg-crimson {
    background-color: crimson;
  }
  
  .bg-cyan {
    background-color: cyan;
  }
  
  .bg-darkblue {
    background-color: darkblue;
  }
  
  .bg-darkcyan {
    background-color: darkcyan;
  }
  
  .bg-darkgoldenrod {
    background-color: darkgoldenrod;
  }
  
  .bg-darkgray {
    background-color: darkgray;
  }
  
  .bg-darkgreen {
    background-color: darkgreen;
  }
  
  .bg-darkgrey {
    background-color: darkgrey;
  }
  
  .bg-darkkhaki {
    background-color: darkkhaki;
  }
  
  .bg-darkmagenta {
    background-color: darkmagenta;
  }
  
  .bg-darkolivegreen {
    background-color: darkolivegreen;
  }
  
  .bg-darkorange {
    background-color: darkorange;
  }
  
  .bg-darkorchid {
    background-color: darkorchid;
  }
  
  .bg-darkred {
    background-color: darkred;
  }
  
  .bg-darksalmon {
    background-color: darksalmon;
  }
  
  .bg-darkseagreen {
    background-color: darkseagreen;
  }
  
  .bg-darkslateblue {
    background-color: darkslateblue;
  }
  
  .bg-darkslategray {
    background-color: darkslategray;
  }
  
  .bg-darkslategrey {
    background-color: darkslategrey;
  }
  
  .bg-darkturquoise {
    background-color: darkturquoise;
  }
  
  .bg-darkviolet {
    background-color: darkviolet;
  }
  
  .bg-deeppink {
    background-color: deeppink;
  }
  
  .bg-deepskyblue {
    background-color: deepskyblue;
  }
  
  .bg-dimgray {
    background-color: dimgray;
  }
  
  .bg-dimgrey {
    background-color: dimgrey;
  }
  
  .bg-dodgerblue {
    background-color: dodgerblue;
  }
  
  .bg-firebrick {
    background-color: firebrick;
  }
  
  .bg-floralwhite {
    background-color: floralwhite;
  }
  
  .bg-forestgreen {
    background-color: forestgreen;
  }
  
  .bg-fuchsia {
    background-color: fuchsia;
  }
  
  .bg-gainsboro {
    background-color: gainsboro;
  }
  
  .bg-ghostwhite {
    background-color: ghostwhite;
  }
  
  .bg-gold {
    background-color: gold;
  }
  
  .bg-goldenrod {
    color: goldenrod;
  }
  
  .bg-gray {
    background-color: gray;
  }
  
  .bg-green {
    background-color: green;
  }
  
  .bg-greenyellow {
    background-color: greenyellow;
  }
  
  .bg-grey {
    background-color: grey;
  }
  
  .bg-honeydew {
    background-color: honeydew;
  }
  
  .bg-hotpink {
    background-color: hotpink;
  }
  
  .bg-indianred {
    background-color: indianred;
  }
  
  .bg-indigo {
    background-color: indigo;
  }
  
  .bg-ivory {
    background-color: ivory;
  }
  
  .bg-khaki {
    background-color: khaki;
  }
  
  .bg-lavender {
    background-color: lavender;
  }
  
  .bg-lavenderblush {
    background-color: lavenderblush;
  }
  
  .bg-lawngreen {
    background-color: lawngreen;
  }
  
  .bg-lemonchiffon {
    background-color: lemonchiffon;
  }
  
  .bg-lightblue {
    background-color: lightblue;
  }
  
  .bg-lightcoral {
    background-color: lightcoral;
  }
  
  .bg-lightcyan {
    background-color: lightcyan;
  }
  
  .bg-lightgoldenrodyellow {
    background-color: lightgoldenrodyellow;
  }
  
  .bg-lightgray {
    background-color: lightgray;
  }
  
  .bg-lightgreen {
    background-color: lightgreen;
  }
  
  .bg-lightgrey {
    background-color: lightgrey;
  }
  
  .bg-lightpink {
    background-color: lightpink;
  }
  
  .bg-lightsalmon {
    background-color: lightsalmon;
  }
  
  .bg-lightseagreen {
    background-color: lightseagreen;
  }
  
  .bg-lightskyblue {
    background-color: lightskyblue;
  }
  
  .bg-lightslategray {
    background-color: lightslategray;
  }
  
  .bg-lightslategrey {
    background-color: lightslategrey;
  }
  
  .bg-lightsteelblue {
    background-color: lightsteelblue;
  }
  
  .bg-lightyellow {
    background-color: lightyellow;
  }
  
  .bg-lime {
    background-color: lime;
  }
  
  .bg-limegreen {
    background-color: limegreen;
  }
  
  .bg-linen {
    background-color: linen;
  }
  
  .bg-magenta {
    background-color: magenta;
  }
  
  .bg-maroon {
    background-color: maroon;
  }
  
  .bg-mediumaquamarine {
    background-color: mediumaquamarine;
  }
  
  .bg-mediumblue {
    background-color: mediumblue;
  }
  
  .bg-mediumorchid {
    background-color: mediumorchid;
  }
  
  .bg-mediumpurple {
    background-color: mediumpurple;
  }
  
  .bg-mediumseagreen {
    background-color: mediumseagreen;
  }
  
  .bg-mediumslateblue {
    background-color: mediumslateblue;
  }
  
  .bg-mediumspringgreen {
    background-color: mediumspringgreen;
  }
  
  .bg-mediumturquoise {
    background-color: mediumturquoise;
  }
  
  .bg-mediumvioletred {
    background-color: mediumvioletred;
  }
  
  .bg-midnightblue {
    background-color: midnightblue;
  }
  
  .bg-mintcream {
    background-color: mintcream;
  }
  
  .bg-mistyrose {
    background-color: mistyrose;
  }
  
  .bg-moccasin {
    background-color: moccasin;
  }
  
  .bg-navajowhite {
    background-color: navajowhite;
  }
  
  .bg-navy {
    background-color: navy;
  }
  
  .bg-oldlace {
    background-color: oldlace;
  }
  
  .bg-olive {
    background-color: olive;
  }
  
  .bg-olivedrab {
    background-color: olivedrab;
  }
  
  .bg-orange {
    background-color: orange;
  }
  
  .bg-orangered {
    background-color: orangered;
  }
  
  .bg-orchid {
    background-color: orchid;
  }
  
  .bg-palegoldenrod {
    background-color: palegoldenrod;
  }
  
  .bg-palegreen {
    background-color: palegreen;
  }
  
  .bg-paleturquoise {
    background-color: paleturquoise;
  }
  
  .bg-palevioletred {
    background-color: palevioletred;
  }
  
  .bg-papayawhip {
    background-color: papayawhip;
  }
  
  .bg-peachpuff {
    background-color: peachpuff;
  }
  
  .bg-peru {
    background-color: peru;
  }
  
  .bg-pink {
    background-color: pink;
  }
  
  .bg-plum {
    background-color: plum;
  }
  
  .bg-powderblue {
    background-color: powderblue;
  }
  
  .bg-purple {
    background-color: purple;
  }
  
  .bg-rebeccapurple {
    background-color: rebeccapurple;
  }
  
  .bg-red {
    background-color: red;
  }
  
  .bg-rosybrown {
    background-color: rosybrown;
  }
  
  .bg-royalblue {
    background-color: royalblue;
  }
  
  .bg-saddlebrown {
    background-color: saddlebrown;
  }
  
  .bg-salmon {
    background-color: salmon;
  }
  
  .bg-sandybrown {
    background-color: sandybrown;
  }
  
  .bg-seagreen {
    background-color: seagreen;
  }
  
  .bg-seashell {
    background-color: seashell;
  }
  
  .bg-sienna {
    background-color: sienna;
  }
  
  .bg-silver {
    background-color: silver;
  }
  
  .bg-skyblue {
    background-color: skyblue;
  }
  
  .bg-slateblue {
    background-color: slateblue;
  }
  
  .bg-slategray {
    background-color: slategray;
  }
  
  .bg-slategrey {
    background-color: slategrey;
  }
  
  .bg-snow {
    background-color: snow;
  }
  
  .bg-springgreen {
    background-color: springgreen;
  }
  
  .bg-steelblue {
    background-color: steelblue;
  }
  
  .bg-tan {
    background-color: tan;
  }
  
  .bg-teal {
    background-color: teal;
  }
  
  .bg-thistle {
    background-color: thistle;
  }
  
  .bg-tomato {
    background-color: tomato;
  }
  
  .bg-transparent {
    background-color: transparent;
  }
  
  .bg-turquoise {
    background-color: turquoise;
  }
  
  .bg-violet {
    background-color: violet;
  }
  
  .bg-wheat {
    background-color: wheat;
  }
  
  .bg-white {
    background-color: white;
  }
  
  .bg-whitesmoke {
    background-color: whitesmoke;
  }
  
  .bg-yellow {
    background-color: yellow;
  }
  
  .bg-yellowgreen {
    background-color: yellowgreen;
  }
  
  
  /* DISPLAY */
  /* DISPLAY */
  /* DISPLAY */
  
  .AllDisplay {
    display: block;
    display: contents;
    display: flex;
    display: flexbox;
    display: flow-root;
    display: grid;
    display: inline;
    display: inline-block;
    display: inline-flex;
    display: inline-flexbox;
    display: inline-table;
    display: list-item;
    display: none;
    display: ruby;
    display: ruby-base;
    display: ruby-base-container;
    display: ruby-text;
    display: ruby-text-container;
    display: run-in;
    display: table;
    display: table-caption;
    display: table-cell;
    display: table-column;
    display: table-column-group;
    display: table-footer-group;
    display: table-header-group;
    display: table-row;
    display: table-row-group;
  }
  
  .block {
    display: block;
  }
  
  .contents {
    display: contents;
  }
  
  .flex {
    display: flex;
  }
  
  .flexbox {
    display: flexbox;
  }
  
  .flow-root {
    display: flow-root;
  }
  
  .grid {
    display: grid;
  }
  
  .inline {
    display: inline;
  }
  
  .inline-block {
    display: inline-block;
  }
  
  .inline-flex {
    display: inline-flex;
  }
  
  .inline-flexbox {
    display: inline-flex;
  }
  
  .inline-table {
    display: inline-table;
  }
  
  .list-item {
    display: list-item;
  }
  
  .none {
    display: none;
  }
  
  .ruby {
    display: ruby;
  }
  
  .ruby-base {
    display: ruby-base;
  }
  
  .ruby-base-container {
    display: ruby-base-container;
  }
  
  .ruby-text {
    display: ruby-text;
  }
  
  .ruby-text-container {
    display: ruby-text-container;
  }
  
  .run-in {
    display: run-in;
  }
  
  .table {
    display: table;
  }
  
  .table-caption {
    display: table-caption;
  }
  
  .table-cell {
    display: table-cell;
  }
  
  .table-column {
    display: table-column;
  }
  
  .table-column-group {
    display: table-column-group;
  }
  
  .table-footer-group {
    display: table-footer-group;
  }
  
  .table-header-group {
    display: table-header-group;
  }
  
  .table-row {
    display: table-row;
  }
  
  .table-row-group {
    display: table-row-group;
  }
  
  /* POSITION */
  /* POSITION */
  /* POSITION */
  
  .AllPosition {
    position: absolute;
    position: fixed;
    position: relative;
    position: static;
    position: sticky;
    position: -ms-page;
    position: -webkit-sticky;
    position: inherit;
    position: initial;
    position: unset;
  }
  
  .absolute {
    position: absolute;
  }
  
  .fixed {
    position: fixed;
  }
  
  .relative {
    position: relative;
  }
  
  .static {
    position: static;
  }
  
  .sticky {
    position: sticky;
  }
  
  .ms-page {
    position: -ms-page;
  }
  
  .webkit-sticky {
    position: -webkit-sticky;
  }
  
  .inherit {
    position: inherit;
  }
  
  .initial {
    position: initial;
  }
  
  .unset {
    position: unset;
  }
  
  /* PADDING 1PX || 80PX*/
  /* PADDING 1PX || 80PX*/
  /* PADDING 1PX || 80PX*/
  
  .padding1 {
    padding: 1px;
  }
  
  .padding2 {
    padding: 2px;
  }
  
  .padding3 {
    padding: 3px;
  }
  
  .padding4 {
    padding: 4px;
  }
  
  .padding5 {
    padding: 5px;
  }
  
  .padding6 {
    padding: 6px;
  }
  
  .padding7 {
    padding: 7px;
  }
  
  .padding8 {
    padding: 8px;
  }
  
  .padding9 {
    padding: 9px;
  }
  
  .padding10 {
    padding: 10px;
  }
  
  .padding11 {
    padding: 11px;
  }
  
  .padding12 {
    padding: 12px;
  }
  
  .padding13 {
    padding: 13px;
  }
  
  .padding14 {
    padding: 14px;
  }
  
  .padding15 {
    padding: 15px;
  }
  
  .padding16 {
    padding: 16px;
  }
  
  .padding17 {
    padding: 17px;
  }
  
  .padding18 {
    padding: 18px;
  }
  
  .padding19 {
    padding: 19px;
  }
  
  .padding20 {
    padding: 20px;
  }
  
  .padding21 {
    padding: 21px;
  }
  
  .padding22 {
    padding: 22x;
  }
  
  .padding23 {
    padding: 23px;
  }
  
  .padding24 {
    padding: 24px;
  }
  
  .padding25 {
    padding: 25px;
  }
  
  .padding26 {
    padding: 26px;
  }
  
  .padding27 {
    padding: 27px;
  }
  
  .padding28 {
    padding: 28px;
  }
  
  .padding29 {
    padding: 29px;
  }
  
  .padding30 {
    padding: 30px;
  }
  
  .padding31 {
    padding: 31px;
  }
  
  .padding32 {
    padding: 32px;
  }
  
  .padding33 {
    padding: 33px;
  }
  
  .padding34 {
    padding: 34px;
  }
  
  .padding35 {
    padding: 35px;
  }
  
  .padding36 {
    padding: 36px;
  }
  
  .padding37 {
    padding: 37px;
  }
  
  .padding38 {
    padding: 38px;
  }
  
  .padding39 {
    padding: 39px;
  }
  
  .padding40 {
    padding: 40px;
  }
  
  .padding41 {
    padding: 41px;
  }
  
  .padding42 {
    padding: 42px;
  }
  
  .padding43 {
    padding: 43px;
  }
  
  .padding44 {
    padding: 44px;
  }
  
  .padding45 {
    padding: 45px;
  }
  
  .padding46 {
    padding: 46px;
  }
  
  .padding47 {
    padding: 47px;
  }
  
  .padding48 {
    padding: 48px;
  }
  
  .padding49 {
    padding: 49px;
  }
  
  .padding50 {
    padding: 50px;
  }
  
  .padding51 {
    padding: 51px;
  }
  
  .padding52 {
    padding: 52px;
  }
  
  .padding53 {
    padding: 53px;
  }
  
  .padding54 {
    padding: 54px;
  }
  
  .padding55 {
    padding: 55px;
  }
  
  .padding56 {
    padding: 56px;
  }
  
  .padding57 {
    padding: 57px;
  }
  
  .padding58 {
    padding: 58px;
  }
  
  .padding59 {
    padding: 59px;
  }
  
  .padding60 {
    padding: 60px;
  }
  
  .padding61 {
    padding: 61px;
  }
  
  .padding62 {
    padding: 62px;
  }
  
  .padding63 {
    padding: 63px;
  }
  
  .padding64 {
    padding: 64px;
  }
  
  .padding65 {
    padding: 65px;
  }
  
  .padding66 {
    padding: 66px;
  }
  
  .padding67 {
    padding: 67px;
  }
  
  .padding68 {
    padding: 68px;
  }
  
  .padding68 {
    padding: 68px;
  }
  
  .padding69 {
    padding: 69px;
  }
  
  .padding70 {
    padding: 70px;
  }
  
  .padding71 {
    padding: 71px;
  }
  
  .padding72 {
    padding: 72px;
  }
  
  .padding73 {
    padding: 73px;
  }
  
  .padding74 {
    padding: 74px;
  }
  
  .padding75 {
    padding: 75px;
  }
  
  .padding76 {
    padding: 76px;
  }
  
  .padding77 {
    padding: 77px;
  }
  
  .padding78 {
    padding: 78px;
  }
  
  .padding79 {
    padding: 79px;
  }
  
  .padding80 {
    padding: 80px;
  }
  
  /* PADDING-TOP 1PX || 80PX*/
  /* PADDING-TOP 1PX || 80PX*/
  /* PADDING-TOP 1PX || 80PX*/
  
  .padding-top1 {
    padding-top: 1px;
  }
  
  .padding-top2 {
    padding-top: 2px;
  }
  
  .padding-top3 {
    padding-top: 3px;
  }
  
  .padding-top4 {
    padding-top: 4px;
  }
  
  .padding-top5 {
    padding-top: 5px;
  }
  
  .padding-top6 {
    padding-top: 6px;
  }
  
  .padding-top7 {
    padding-top: 7px;
  }
  
  .padding-top8 {
    padding-top: 8px;
  }
  
  .padding-top9 {
    padding-top: 9px;
  }
  
  .padding-top10 {
    padding-top: 10px;
  }
  
  .padding-top11 {
    padding-top: 11px;
  }
  
  .padding-top12 {
    padding-top: 12px;
  }
  
  .padding-top13 {
    padding-top: 13px;
  }
  
  .padding-top14 {
    padding-top: 14px;
  }
  
  .padding-top15 {
    padding-top: 15px;
  }
  
  .padding-top16 {
    padding-top: 16px;
  }
  
  .padding-top17 {
    padding-top: 17px;
  }
  
  .padding-top18 {
    padding-top: 18px;
  }
  
  .padding-top19 {
    padding-top: 19px;
  }
  
  .padding-top20 {
    padding: 20px;
  }
  
  .padding-top21 {
    padding-top: 21px;
  }
  
  .padding-top22 {
    padding-top: 22x;
  }
  
  .padding-top23 {
    padding-top: 23px;
  }
  
  .padding-top24 {
    padding-top: 24px;
  }
  
  .padding-top25 {
    padding-top: 25px;
  }
  
  .padding-top26 {
    padding-top: 26px;
  }
  
  .padding-top27 {
    padding-top: 27px;
  }
  
  .padding-top28 {
    padding-top: 28px;
  }
  
  .padding-top29 {
    padding-top: 29px;
  }
  
  .padding-top30 {
    padding-top: 30px;
  }
  
  .padding-top31 {
    padding-top: 31px;
  }
  
  .padding-top32 {
    padding-top: 32px;
  }
  
  .padding-top33 {
    padding-top: 33px;
  }
  
  .padding-top34 {
    padding-top: 34px;
  }
  
  .padding-top35 {
    padding-top: 35px;
  }
  
  .padding-top36 {
    padding-top: 36px;
  }
  
  .padding-top37 {
    padding-top: 37px;
  }
  
  .padding-top38 {
    padding-top: 38px;
  }
  
  .padding-top39 {
    padding-top: 39px;
  }
  
  .padding-top40 {
    padding-top: 40px;
  }
  
  .padding-top41 {
    padding-top: 41px;
  }
  
  .padding-top42 {
    padding-top: 42px;
  }
  
  .padding-top43 {
    padding-top: 43px;
  }
  
  .padding-top44 {
    padding-top: 44px;
  }
  
  .padding-top45 {
    padding-top: 45px;
  }
  
  .padding-top46 {
    padding-top: 46px;
  }
  
  .padding-top47 {
    padding-top: 47px;
  }
  
  .padding-top48 {
    padding-top: 48px;
  }
  
  .padding-top49 {
    padding-top: 49px;
  }
  
  .padding-top50 {
    padding-top: 50px;
  }
  
  .padding-top51 {
    padding-top: 51px;
  }
  
  .padding-top52 {
    padding-top: 52px;
  }
  
  .padding-top53 {
    padding-top: 53px;
  }
  
  .padding-top54 {
    padding-top: 54px;
  }
  
  .padding-top55 {
    padding-top: 55px;
  }
  
  .padding-top56 {
    padding-top: 56px;
  }
  
  .padding-top57 {
    padding-top: 57px;
  }
  
  .padding-top58 {
    padding-top: 58px;
  }
  
  .padding-top59 {
    padding-top: 59px;
  }
  
  .padding-top60 {
    padding-top: 60px;
  }
  
  .padding-top61 {
    padding-top: 61px;
  }
  
  .padding-top62 {
    padding-top: 62px;
  }
  
  .padding-top63 {
    padding-top: 63px;
  }
  
  .padding-top64 {
    padding-top: 64px;
  }
  
  .padding-top65 {
    padding-top: 65px;
  }
  
  .padding-top66 {
    padding-top: 66px;
  }
  
  .padding-top67 {
    padding-top: 67px;
  }
  
  .padding-top68 {
    padding-top: 68px;
  }
  
  .padding-top69 {
    padding-top: 69px;
  }
  
  .padding-top70 {
    padding-top: 70px;
  }
  
  .padding-top71 {
    padding-top: 71px;
  }
  
  .padding-top72 {
    padding-top: 72px;
  }
  
  .padding-top73 {
    padding-top: 73px;
  }
  
  .padding-top74 {
    padding-top: 74px;
  }
  
  .padding-top75 {
    padding-top: 75px;
  }
  
  .padding-top76 {
    padding-top: 76px;
  }
  
  .padding-top77 {
    padding-top: 77px;
  }
  
  .padding-top78 {
    padding-top: 78px;
  }
  
  .padding-top79 {
    padding-top: 79px;
  }
  
  .padding-top80 {
    padding-top: 80px;
  }
  
  /* PADDING-RIGHT 1PX || 80PX*/
  /* PADDING-RIGHT 1PX || 80PX*/
  /* PADDING-RIGHT 1PX || 80PX*/
  
  .padding-right1 {
    padding-right: 1px;
  }
  
  .padding-right2 {
    padding-right: 2px;
  }
  
  .padding-right3 {
    padding-right: 3px;
  }
  
  .padding-right4 {
    padding-right: 4px;
  }
  
  .padding-right5 {
    padding-right: 5px;
  }
  
  .padding-right6 {
    padding-right: 6px;
  }
  
  .padding-right7 {
    padding-right: 7px;
  }
  
  .padding-right8 {
    padding-right: 8px;
  }
  
  .padding-right9 {
    padding-right: 9px;
  }
  
  .padding-right10 {
    padding-right: 10px;
  }
  
  .padding-right11 {
    padding-right: 11px;
  }
  
  .padding-right12 {
    padding-right: 12px;
  }
  
  .padding-right13 {
    padding-right: 13px;
  }
  
  .padding-right14 {
    padding-right: 14px;
  }
  
  .padding-right15 {
    padding-right: 15px;
  }
  
  .padding-right16 {
    padding-right: 16px;
  }
  
  .padding-right17 {
    padding-right: 17px;
  }
  
  .padding-right18 {
    padding-right: 18px;
  }
  
  .padding-right19 {
    padding-right: 19px;
  }
  
  .padding-right20 {
    padding-right: 20px;
  }
  
  .padding-right21 {
    padding-right: 21px;
  }
  
  .padding-right22 {
    padding-right: 22x;
  }
  
  .padding-right23 {
    padding-right: 23px;
  }
  
  .padding-right24 {
    padding-right: 24px;
  }
  
  .padding-right25 {
    padding-right: 25px;
  }
  
  .padding-right26 {
    padding-right: 26px;
  }
  
  .padding-right27 {
    padding-right: 27px;
  }
  
  .padding-right28 {
    padding-right: 28px;
  }
  
  .padding-right29 {
    padding-right: 29px;
  }
  
  .padding-right30 {
    padding-right: 30px;
  }
  
  .padding-right31 {
    padding-right: 31px;
  }
  
  .padding-right32 {
    padding-right: 32px;
  }
  
  .padding-right33 {
    padding-right: 33px;
  }
  
  .padding-right34 {
    padding-right: 34px;
  }
  
  .padding-right35 {
    padding-right: 35px;
  }
  
  .padding-right36 {
    padding-right: 36px;
  }
  
  .padding-right37 {
    padding-right: 37px;
  }
  
  .padding-right38 {
    padding-right: 38px;
  }
  
  .padding-right39 {
    padding-right: 39px;
  }
  
  .padding-right40 {
    padding-right: 40px;
  }
  
  .padding-right41 {
    padding-right: 41px;
  }
  
  .padding-right42 {
    padding-right: 42px;
  }
  
  .padding-right43 {
    padding-right: 43px;
  }
  
  .padding-right44 {
    padding-right: 44px;
  }
  
  .padding-right45 {
    padding-right: 45px;
  }
  
  .padding-right46 {
    padding-right: 46px;
  }
  
  .padding-right47 {
    padding-right: 47px;
  }
  
  .padding-right48 {
    padding-right: 48px;
  }
  
  .padding-right49 {
    padding-right: 49px;
  }
  
  .padding-right50 {
    padding-right: 50px;
  }
  
  .padding-right51 {
    padding-right: 51px;
  }
  
  .padding-right52 {
    padding-right: 52px;
  }
  
  .padding-right53 {
    padding-right: 53px;
  }
  
  .padding-right54 {
    padding-right: 54px;
  }
  
  .padding-right55 {
    padding-right: 55px;
  }
  
  .padding-right56 {
    padding-right: 56px;
  }
  
  .padding-right57 {
    padding-right: 57px;
  }
  
  .padding-right58 {
    padding-right: 58px;
  }
  
  .padding-right59 {
    padding-right: 59px;
  }
  
  .padding-right60 {
    padding-right: 60px;
  }
  
  .padding-right61 {
    padding-right: 61px;
  }
  
  .padding-right62 {
    padding-right: 62px;
  }
  
  .padding-right63 {
    padding-right: 63px;
  }
  
  .padding-right64 {
    padding-right: 64px;
  }
  
  .padding-right65 {
    padding-right: 65px;
  }
  
  .padding-right66 {
    padding-right: 66px;
  }
  
  .padding-right67 {
    padding-right: 67px;
  }
  
  .padding-right68 {
    padding-right: 68px;
  }
  
  .padding-right68 {
    padding-right: 68px;
  }
  
  .padding-right69 {
    padding-right: 69px;
  }
  
  .padding-right70 {
    padding-right: 70px;
  }
  
  .padding-right71 {
    padding-right: 71px;
  }
  
  .padding-right72 {
    padding-right: 72px;
  }
  
  .padding-right73 {
    padding-right: 73px;
  }
  
  .padding-right74 {
    padding-right: 74px;
  }
  
  .padding-right75 {
    padding-right: 75px;
  }
  
  .padding-right76 {
    padding-right: 76px;
  }
  
  .padding-right77 {
    padding-right: 77px;
  }
  
  .padding-right78 {
    padding-right: 78px;
  }
  
  .padding-right79 {
    padding-right: 79px;
  }
  
  .padding-right80 {
    padding-right: 80px;
  }
  
  /* PADDING-BOTTOM 1PX || 80PX*/
  /* PADDING-BOTTOM 1PX || 80PX*/
  /* PADDING-BOTTOM 1PX || 80PX*/
  
  .padding-bottom1 {
    padding-bottom: 1px;
  }
  
  .padding-bottom2 {
    padding-bottom: 2px;
  }
  
  .padding-bottom3 {
    padding-bottom: 3px;
  }
  
  .padding-bottom4 {
    padding-bottom: 4px;
  }
  
  .padding-bottom5 {
    padding-bottom: 5px;
  }
  
  .padding-bottom6 {
    padding-bottom: 6px;
  }
  
  .padding-bottom7 {
    padding-bottom: 7px;
  }
  
  .padding-bottom8 {
    padding-bottom: 8px;
  }
  
  .padding-bottom9 {
    padding-bottom: 9px;
  }
  
  .padding-bottom10 {
    padding-bottom: 10px;
  }
  
  .padding-bottom11 {
    padding-bottom: 11px;
  }
  
  .padding-bottom12 {
    padding-bottom: 12px;
  }
  
  .padding-bottom13 {
    padding-bottom: 13px;
  }
  
  .padding-bottom14 {
    padding-bottom: 14px;
  }
  
  .padding-bottom15 {
    padding-bottom: 15px;
  }
  
  .padding-bottom16 {
    padding-bottom: 16px;
  }
  
  .padding-bottom17 {
    padding-bottom: 17px;
  }
  
  .padding-bottom18 {
    padding-bottom: 18px;
  }
  
  .padding-bottom19 {
    padding-bottom: 19px;
  }
  
  .padding-bottom20 {
    padding-bottom: 20px;
  }
  
  .padding-bottom21 {
    padding-bottom: 21px;
  }
  
  .padding-bottom22 {
    padding-bottom: 22x;
  }
  
  .padding-bottom23 {
    padding-bottom: 23px;
  }
  
  .padding-bottom24 {
    padding-bottom: 24px;
  }
  
  .padding-bottom25 {
    padding-bottom: 25px;
  }
  
  .padding-bottom26 {
    padding-bottom: 26px;
  }
  
  .padding-bottom27 {
    padding-bottom: 27px;
  }
  
  .padding-bottom28 {
    padding-bottom: 28px;
  }
  
  .padding-bottom29 {
    padding-bottom: 29px;
  }
  
  .padding-bottom30 {
    padding-bottom: 30px;
  }
  
  .padding-bottom31 {
    padding-bottom: 31px;
  }
  
  .padding-bottom32 {
    padding-bottom: 32px;
  }
  
  .padding-bottom33 {
    padding-bottom: 33px;
  }
  
  .padding-bottom34 {
    padding-bottom: 34px;
  }
  
  .padding-bottom35 {
    padding-bottom: 35px;
  }
  
  .padding-bottom36 {
    padding-bottom: 36px;
  }
  
  .padding-bottom37 {
    padding-bottom: 37px;
  }
  
  .padding-bottom38 {
    padding-bottom: 38px;
  }
  
  .padding-bottom39 {
    padding-bottom: 39px;
  }
  
  .padding-bottom40 {
    padding-bottom: 40px;
  }
  
  .padding-bottom41 {
    padding-bottom: 41px;
  }
  
  .padding-bottom42 {
    padding-bottom: 42px;
  }
  
  .padding-bottom43 {
    padding-bottom: 43px;
  }
  
  .padding-bottom44 {
    padding-bottom: 44px;
  }
  
  .padding-bottom45 {
    padding-bottom: 45px;
  }
  
  .padding-bottom46 {
    padding-bottom: 46px;
  }
  
  .padding-bottom47 {
    padding-bottom: 47px;
  }
  
  .padding-bottom48 {
    padding-bottom: 48px;
  }
  
  .padding-bottom49 {
    padding-bottom: 49px;
  }
  
  .padding-bottom50 {
    padding-bottom: 50px;
  }
  
  .padding-bottom51 {
    padding-bottom: 51px;
  }
  
  .padding-bottom52 {
    padding-bottom: 52px;
  }
  
  .padding-bottom53 {
    padding-bottom: 53px;
  }
  
  .padding-bottom54 {
    padding-bottom: 54px;
  }
  
  .padding-bottom55 {
    padding-bottom: 55px;
  }
  
  .padding-bottom56 {
    padding-bottom: 56px;
  }
  
  .padding-bottom57 {
    padding-bottom: 57px;
  }
  
  .padding-bottom58 {
    padding-bottom: 58px;
  }
  
  .padding-bottom59 {
    padding-bottom: 59px;
  }
  
  .padding-bottom60 {
    padding-bottom: 60px;
  }
  
  .padding-bottom61 {
    padding-bottom: 61px;
  }
  
  .padding-bottom62 {
    padding-bottom: 62px;
  }
  
  .padding-bottom63 {
    padding-bottom: 63px;
  }
  
  .padding-bottom64 {
    padding-bottom: 64px;
  }
  
  .padding-bottom65 {
    padding-bottom: 65px;
  }
  
  .padding-bottom66 {
    padding-bottom: 66px;
  }
  
  .padding-bottom67 {
    padding-bottom: 67px;
  }
  
  .padding-bottom68 {
    padding-bottom: 68px;
  }
  
  .padding-bottom68 {
    padding-bottom: 68px;
  }
  
  .padding-bottom69 {
    padding-bottom: 69px;
  }
  
  .padding-bottom70 {
    padding-bottom: 70px;
  }
  
  .padding-bottom71 {
    padding-bottom: 71px;
  }
  
  .padding-bottom72 {
    padding-bottom: 72px;
  }
  
  .padding-bottom73 {
    padding-bottom: 73px;
  }
  
  .padding-bottom74 {
    padding-bottom: 74px;
  }
  
  .padding-bottom75 {
    padding-bottom: 75px;
  }
  
  .padding-bottom76 {
    padding-bottom: 76px;
  }
  
  .padding-bottom77 {
    padding-bottom: 77px;
  }
  
  .padding-bottom78 {
    padding-bottom: 78px;
  }
  
  .padding-bottom79 {
    padding-bottom: 79px;
  }
  
  .padding-bottom80 {
    padding-bottom: 80px;
  }
  
  /* PADDING-LEFT 1PX || 80PX*/
  /* PADDING-LEFT 1PX || 80PX*/
  /* PADDING-LEFT 1PX || 80PX*/
  
  .padding-left1 {
    padding-left: 1px;
  }
  
  .padding-left2 {
    padding-left: 2px;
  }
  
  .padding-left3 {
    padding-left: 3px;
  }
  
  .padding-left4 {
    padding-left: 4px;
  }
  
  .padding-left5 {
    padding-left: 5px;
  }
  
  .padding-left6 {
    padding-left: 6px;
  }
  
  .padding-left7 {
    padding-left: 7px;
  }
  
  .padding-left8 {
    padding-left: 8px;
  }
  
  .padding-left9 {
    padding-left: 9px;
  }
  
  .padding-left10 {
    padding-left: 10px;
  }
  
  .padding-left11 {
    padding-left: 11px;
  }
  
  .padding-left12 {
    padding-left: 12px;
  }
  
  .padding-left13 {
    padding-left: 13px;
  }
  
  .padding-left14 {
    padding-left: 14px;
  }
  
  .padding-left15 {
    padding-left: 15px;
  }
  
  .padding-left16 {
    padding-left: 16px;
  }
  
  .padding-left17 {
    padding-left: 17px;
  }
  
  .padding-left18 {
    padding-left: 18px;
  }
  
  .padding-left19 {
    padding-left: 19px;
  }
  
  .padding-left20 {
    padding-left: 20px;
  }
  
  .padding-left21 {
    padding-left: 21px;
  }
  
  .padding-left22 {
    padding-left: 22x;
  }
  
  .padding-left23 {
    padding-left: 23px;
  }
  
  .padding-left24 {
    padding-left: 24px;
  }
  
  .padding-left25 {
    padding-left: 25px;
  }
  
  .padding-left26 {
    padding-left: 26px;
  }
  
  .padding-left27 {
    padding-left: 27px;
  }
  
  .padding-left28 {
    padding-left: 28px;
  }
  
  .padding-left29 {
    padding-left: 29px;
  }
  
  .padding-left30 {
    padding-left: 30px;
  }
  
  .padding-left31 {
    padding-left: 31px;
  }
  
  .padding-left32 {
    padding-left: 32px;
  }
  
  .padding-left33 {
    padding-left: 33px;
  }
  
  .padding-left34 {
    padding-left: 34px;
  }
  
  .padding-left35 {
    padding-left: 35px;
  }
  
  .padding-left36 {
    padding-left: 36px;
  }
  
  .padding-left37 {
    padding-left: 37px;
  }
  
  .padding-left38 {
    padding-left: 38px;
  }
  
  .padding-left39 {
    padding-left: 39px;
  }
  
  .padding-left40 {
    padding-left: 40px;
  }
  
  .padding-left41 {
    padding-left: 41px;
  }
  
  .padding-left42 {
    padding-left: 42px;
  }
  
  .padding-left43 {
    padding-left: 43px;
  }
  
  .padding-left44 {
    padding-left: 44px;
  }
  
  .padding-left45 {
    padding-left: 45px;
  }
  
  .padding-left46 {
    padding-left: 46px;
  }
  
  .padding-left47 {
    padding-left: 47px;
  }
  
  .padding-left48 {
    padding-left: 48px;
  }
  
  .padding-left49 {
    padding-left: 49px;
  }
  
  .padding-left50 {
    padding-left: 50px;
  }
  
  .padding-left51 {
    padding-left: 51px;
  }
  
  .padding-left52 {
    padding-left: 52px;
  }
  
  .padding-left53 {
    padding-left: 53px;
  }
  
  .padding-left54 {
    padding-left: 54px;
  }
  
  .padding-left55 {
    padding-left: 55px;
  }
  
  .padding-left56 {
    padding-left: 56px;
  }
  
  .padding-left57 {
    padding-left: 57px;
  }
  
  .padding-left58 {
    padding-left: 58px;
  }
  
  .padding-left59 {
    padding-left: 59px;
  }
  
  .padding-left60 {
    padding-left: 60px;
  }
  
  .padding-left61 {
    padding-left: 61px;
  }
  
  .padding-left62 {
    padding-left: 62px;
  }
  
  .padding-left63 {
    padding-left: 63px;
  }
  
  .padding-left64 {
    padding-left: 64px;
  }
  
  .padding-left65 {
    padding-left: 65px;
  }
  
  .padding-left66 {
    padding-left: 66px;
  }
  
  .padding-left67 {
    padding-left: 67px;
  }
  
  .padding-left68 {
    padding-left: 68px;
  }
  
  .padding-left68 {
    padding-left: 68px;
  }
  
  .padding-left69 {
    padding-left: 69px;
  }
  
  .padding-left70 {
    padding-left: 70px;
  }
  
  .padding-left71 {
    padding-left: 71px;
  }
  
  .padding-left72 {
    padding-left: 72px;
  }
  
  .padding-left73 {
    padding-left: 73px;
  }
  
  .padding-left74 {
    padding-left: 74px;
  }
  
  .padding-left75 {
    padding-left: 75px;
  }
  
  .padding-left76 {
    padding-left: 76px;
  }
  
  .padding-left77 {
    padding-left: 77px;
  }
  
  .padding-left78 {
    padding-left: 78px;
  }
  
  .padding-left79 {
    padding-left: 79px;
  }
  
  .padding-left80 {
    padding-left: 80px;
  }
  
  
  /* MARGIN 1PX || 80PX*/
  /* MARGIN 1PX || 80PX*/
  /* MARGIN 1PX || 80PX*/
  
  .margin1 {
    margin: 1px;
  }
  
  .margin2 {
    margin: 2px;
  }
  
  .margin3 {
    margin: 3px;
  }
  
  .margin4 {
    margin: 4px;
  }
  
  .margin5 {
    margin: 5px;
  }
  
  .margin6 {
    margin: 6px;
  }
  
  .margin7 {
    margin: 7px;
  }
  
  .margin8 {
    margin: 8px;
  }
  
  .margin9 {
    margin: 9px;
  }
  
  .margin10 {
    margin: 10px;
  }
  
  .margin11 {
    margin: 11px;
  }
  
  .margin12 {
    margin: 12px;
  }
  
  .margin13 {
    margin: 13px;
  }
  
  .margin14 {
    margin: 14px;
  }
  
  .margin15 {
    margin: 15px;
  }
  
  .margin16 {
    margin: 16px;
  }
  
  .margin17 {
    margin: 17px;
  }
  
  .margin18 {
    margin: 18px;
  }
  
  .margin19 {
    margin: 19px;
  }
  
  .margin20 {
    margin: 20px;
  }
  
  .margin21 {
    margin: 21px;
  }
  
  .margin22 {
    margin: 22px;
  }
  
  .margin23 {
    margin: 23px;
  }
  
  .margin24 {
    margin: 24px;
  }
  
  .margin25 {
    margin: 25px;
  }
  
  .margin26 {
    margin: 26px;
  }
  
  .margin27 {
    margin: 27px;
  }
  
  .margin28 {
    margin: 28px;
  }
  
  .margin29 {
    margin: 29px;
  }
  
  .margin30 {
    margin: 30px;
  }
  
  .margin31 {
    margin: 31px;
  }
  
  .margin32 {
    margin: 32px;
  }
  
  .margin33 {
    margin: 33px;
  }
  
  .margin34 {
    margin: 34px;
  }
  
  .margin35 {
    margin: 35px;
  }
  
  .margin36 {
    margin: 36px;
  }
  
  .margin37 {
    margin: 37px;
  }
  
  .margin38 {
    margin: 38px;
  }
  
  .margin39 {
    margin: 39px;
  }
  
  .margin40 {
    margin: 40px;
  }
  
  .margin41 {
    margin: 41px;
  }
  
  .margin42 {
    margin: 42px;
  }
  
  .margin43 {
    margin: 43px;
  }
  
  .margin44 {
    margin: 44px;
  }
  
  .margin45 {
    margin: 45px;
  }
  
  .margin46 {
    margin: 46px;
  }
  
  .margin47 {
    margin: 47px;
  }
  
  .margin48 {
    margin: 48px;
  }
  
  .margin49 {
    margin: 49px;
  }
  
  .margin50 {
    margin: 50px;
  }
  
  .margin51 {
    margin: 51px;
  }
  
  .margin52 {
    margin: 52px;
  }
  
  .margin53 {
    margin: 53px;
  }
  
  .margin54 {
    margin: 54px;
  }
  
  .margin55 {
    margin: 55px;
  }
  
  .margin56 {
    margin: 56px;
  }
  
  .margin57 {
    margin: 57px;
  }
  
  .margin58 {
    margin: 58px;
  }
  
  .margin59 {
    margin: 59px;
  }
  
  .margin60 {
    margin: 60px;
  }
  
  .margin61 {
    margin: 61px;
  }
  
  .margin62 {
    margin: 62px;
  }
  
  .margin63 {
    margin: 63px;
  }
  
  .margin64 {
    margin: 64px;
  }
  
  .margin65 {
    margin: 65px;
  }
  
  .margin66 {
    margin: 66px;
  }
  
  .margin67 {
    margin: 67px;
  }
  
  .margin68 {
    margin: 68px;
  }
  
  .margin69 {
    margin: 69px;
  }
  
  .margin70 {
    margin: 70px;
  }
  
  .margin71 {
    margin: 71px;
  }
  
  .margin72 {
    margin: 72px;
  }
  
  .margin73 {
    margin: 73px;
  }
  
  .margin74 {
    margin: 74px;
  }
  
  .margin75 {
    margin: 75px;
  }
  
  .margin76 {
    margin: 76px;
  }
  
  .margin77 {
    margin: 77px;
  }
  
  .margin78 {
    margin: 78px;
  }
  
  .margin79 {
    margin: 79px;
  }
  
  .margin80 {
    margin: 80px;
  }
  
  /* MARGIN-TOP 1PX || 80PX*/
  /* MARGIN-TOP 1PX || 80PX*/
  /* MARGIN-TOP 1PX || 80PX*/
  
  .margin-top1 {
    margin-top: 1px;
  }
  
  .margin-top2 {
    margin-top: 2px;
  }
  
  .margin-top3 {
    margin-top: 3px;
  }
  
  .margin-top4 {
    margin-top: 4px;
  }
  
  .margin-top5 {
    margin-top: 5px;
  }
  
  .margin-top6 {
    margin-top: 6px;
  }
  
  .margin-top7 {
    margin-top: 7px;
  }
  
  .margin-top8 {
    margin-top: 8px;
  }
  
  .margin-top9 {
    margin-top: 9px;
  }
  
  .margin-top10 {
    margin-top: 10px;
  }
  
  .margin-top11 {
    margin-top: 11px;
  }
  
  .margin-top12 {
    margin-top: 12px;
  }
  
  .margin-top13 {
    margin-top: 13px;
  }
  
  .margin-top14 {
    margin-top: 14px;
  }
  
  .margin-top15 {
    margin-top: 15px;
  }
  
  .margin-top16 {
    margin-top: 16px;
  }
  
  .margin-top17 {
    margin-top: 17px;
  }
  
  .margin-top18 {
    margin-top: 18px;
  }
  
  .margin-top19 {
    margin-top: 19px;
  }
  
  .margin-top20 {
    margin-top: 20px;
  }
  
  .margin-top21 {
    margin-top: 21px;
  }
  
  .margin-top22 {
    margin-top: 22px;
  }
  
  .margin-top23 {
    margin-top: 23px;
  }
  
  .margin-top24 {
    margin-top: 24px;
  }
  
  .margin-top25 {
    margin-top: 25px;
  }
  
  .margin-top26 {
    margin-top: 26px;
  }
  
  .margin-top27 {
    margin-top: 27px;
  }
  
  .margin-top28 {
    margin-top: 28px;
  }
  
  .margin-top29 {
    margin-top: 29px;
  }
  
  .margin-top30 {
    margin-top: 30px;
  }
  
  .margin-top31 {
    margin-top: 31px;
  }
  
  .margin-top32 {
    margin-top: 32px;
  }-top
  
  .margin-top33 {
    margin-top: 33px;
  }
  
  .margin-top34 {
    margin-top: 34px;
  }
  
  .margin-top35 {
    margin-top: 35px;
  }
  
  .margin-top36 {
    margin-top: 36px;
  }
  
  .margin-top37 {
    margin-top: 37px;
  }
  
  .margin-top38 {
    margin-top: 38px;
  }
  
  .margin-top39 {
    margin-top: 39px;
  }
  
  .margin-top40 {
    margin-top: 40px;
  }
  
  .margin-top41 {
    margin-top: 41px;
  }
  
  .margin-top42 {
    margin-top: 42px;
  }
  
  .margin-top43 {
    margin-top: 43px;
  }
  
  .margin-top44 {
    margin-top: 44px;
  }
  
  .margin-top45 {
    margin-top: 45px;
  }
  
  .margin-top46 {
    margin-top: 46px;
  }
  
  .margin-top47 {
    margin-top: 47px;
  }
  
  .margin-top48 {
    margin-top: 48px;
  }
  
  .margin-top49 {
    margin-top: 49px;
  }
  
  .margin-top50 {
    margin-top: 50px;
  }
  
  .margin-top51 {
    margin-top: 51px;
  }
  
  .margin-top52 {
    margin-top: 52px;
  }
  
  .margin-top53 {
    margin-top: 53px;
  }
  
  .margin-top54 {
    margin-top: 54px;
  }
  
  .margin-top55 {
    margin-top: 55px;
  }
  
  .margin-top56 {
    margin-top: 56px;
  }
  
  .margin-top57 {
    margin-top: 57px;
  }
  
  .margin-top58 {
    margin-top: 58px;
  }
  
  .margin-top59 {
    margin-top: 59px;
  }
  
  .margin-top60 {
    margin-top: 60px;
  }
  
  .margin-top61 {
    margin-top: 61px;
  }
  
  .margin-top62 {
    margin-top: 62px;
  }
  
  .margin-top63 {
    margin-top: 63px;
  }
  
  .margin-top64 {
    margin-top: 64px;
  }
  
  .margin-top65 {
    margin-top: 65px;
  }
  
  .margin-top66 {
    margin-top: 66px;
  }
  
  .margin-top67 {
    margin-top: 67px;
  }
  
  .margin-top68 {
    margin-top: 68px;
  }
  
  .margin-top69 {
    margin-top: 69px;
  }
  
  .margin-top70 {
    margin-top: 70px;
  }
  
  .margin-top71 {
    margin-top: 71px;
  }
  
  .margin-top72 {
    margin-top: 72px;
  }
  
  .margin-top73 {
    margin-top: 73px;
  }
  
  .margin-top74 {
    margin-top: 74px;
  }
  
  .margin-top75 {
    margin-top: 75px;
  }
  
  .margin-top76 {
    margin-top: 76px;
  }
  
  .margin-top77 {
    margin-top: 77px;
  }
  
  .margin-top78 {
    margin-top: 78px;
  }
  
  .margin-top79 {
    margin-top: 79px;
  }
  
  .margin-top80 {
    margin-top: 80px;
  }
  
  /* MARGIN-RIGHT 1PX || 80PX*/
  /* MARGIN-RIGHT 1PX || 80PX*/
  /* MARGIN-RIGHT 1PX || 80PX*/
  
  .margin-right1 {
    margin-right: 1px;
  }
  
  .margin-right2 {
    margin-right: 2px;
  }
  
  .margin-right3 {
    margin-right: 3px;
  }
  
  .margin-right4 {
    margin-right: 4px;
  }
  
  .margin-right5 {
    margin-right: 5px;
  }
  
  .margin-right6 {
    margin-right: 6px;
  }
  
  .margin-right7 {
    margin-right: 7px;
  }
  
  .margin-right8 {
    margin-right: 8px;
  }
  
  .margin-right9 {
    margin-right: 9px;
  }
  
  .margin-right10 {
    margin-right: 10px;
  }
  
  .margin-right11 {
    margin-right: 11px;
  }
  
  .margin-right12 {
    margin-right: 12px;
  }
  
  .margin-right13 {
    margin-right: 13px;
  }
  
  .margin-right14 {
    margin-right: 14px;
  }
  
  .margin-right15 {
    margin-right: 15px;
  }
  
  .margin-right16 {
    margin-right: 16px;
  }
  
  .margin-right17 {
    margin-right: 17px;
  }
  
  .margin-right18 {
    margin-right: 18px;
  }
  
  .margin-right19 {
    margin-right: 19px;
  }
  
  .margin-right20 {
    margin-right: 20px;
  }
  
  .margin-right21 {
    margin-right: 21px;
  }
  
  .margin-right22 {
    margin-right: 22px;
  }
  
  .margin-right23 {
    margin-right: 23px;
  }
  
  .margin-right24 {
    margin-right: 24px;
  }
  
  .margin-right25 {
    margin-right: 25px;
  }
  
  .margin-right26 {
    margin-right: 26px;
  }
  
  .margin-right27 {
    margin-right: 27px;
  }
  
  .margin-right28 {
    margin-right: 28px;
  }
  
  .margin-right29 {
    margin-right: 29px;
  }
  
  .margin-right30 {
    margin-right: 30px;
  }
  
  .margin-right31 {
    margin-right: 31px;
  }
  
  .margin-right32 {
    margin-right: 32px;
  }
  
  .margin-right33 {
    margin-right: 33px;
  }
  
  .margin-right34 {
    margin-right: 34px;
  }
  
  .margin-right35 {
    margin-right: 35px;
  }
  
  .margin-right36 {
    margin-right: 36px;
  }
  
  .margin-right37 {
    margin-right: 37px;
  }
  
  .margin-right38 {
    margin-right: 38px;
  }
  
  .margin-right39 {
    margin-right: 39px;
  }
  
  .margin-right40 {
    margin-right: 40px;
  }
  
  .margin-right41 {
    margin-right: 41px;
  }
  
  .margin-right42 {
    margin-right: 42px;
  }
  
  .margin-right43 {
    margin-right: 43px;
  }
  
  .margin-right44 {
    margin-right: 44px;
  }
  
  .margin-right45 {
    margin-right: 45px;
  }
  
  .margin-right46 {
    margin-right: 46px;
  }
  
  .margin-right47 {
    margin-right: 47px;
  }
  
  .margin-right48 {
    margin-right: 48px;
  }
  
  .margin-right49 {
    margin-right: 49px;
  }
  
  .margin-right50 {
    margin-right: 50px;
  }
  
  .margin-right51 {
    margin-right: 51px;
  }
  
  .margin-right52 {
    margin-right: 52px;
  }
  
  .margin-right53 {
    margin-right: 53px;
  }
  
  .margin-right54 {
    margin-right: 54px;
  }
  
  .margin-right55 {
    margin-right: 55px;
  }
  
  .margin-right56 {
    margin-right: 56px;
  }
  
  .margin-right57 {
    margin-right: 57px;
  }
  
  .margin-right58 {
    margin-right: 58px;
  }
  
  .margin-right59 {
    margin-right: 59px;
  }
  
  .margin-right60 {
    margin-right: 60px;
  }
  
  .margin-right61 {
    margin-right: 61px;
  }
  
  .margin-right62 {
    margin-right: 62px;
  }
  
  .margin-right63 {
    margin-right: 63px;
  }
  
  .margin-right64 {
    margin-right: 64px;
  }
  
  .margin-right65 {
    margin-right: 65px;
  }
  
  .margin-right66 {
    margin-right: 66px;
  }
  
  .margin-right67 {
    margin-right: 67px;
  }
  
  .margin-right68 {
    margin-right: 68px;
  }
  
  .margin-right69 {
    margin-right: 69px;
  }
  
  .margin-right70 {
    margin-right: 70px;
  }
  
  .margin-right71 {
    margin-right: 71px;
  }
  
  .margin-right72 {
    margin-right: 72px;
  }
  
  .margin-right73 {
    margin-right: 73px;
  }
  
  .margin-right74 {
    margin-right: 74px;
  }
  
  .margin-right75 {
    margin-right: 75px;
  }
  
  .margin-right76 {
    margin-right: 76px;
  }
  
  .margin-right77 {
    margin-right: 77px;
  }
  
  .margin-right78 {
    margin-right: 78px;
  }
  
  .margin-right79 {
    margin-right: 79px;
  }
  
  .margin-right80 {
    margin-right: 80px;
  }
  
  /* MARGIN-BOTTOM 1PX || 80PX*/
  /* MARGIN-BOTTOM 1PX || 80PX*/
  /* MARGIN-BOTTOM 1PX || 80PX*/
  
  .margin-bottom1 {
    margin-bottom: 1px;
  }
  
  .margin-bottom2 {
    margin-bottom: 2px;
  }
  
  .margin-bottom3 {
    margin-bottom: 3px;
  }
  
  .margin-bottom4 {
    margin-bottom: 4px;
  }
  
  .margin-bottom5 {
    margin-bottom: 5px;
  }
  
  .margin-bottom6 {
    margin-bottom: 6px;
  }
  
  .margin-bottom7 {
    margin-bottom: 7px;
  }
  
  .margin-bottom8 {
    margin-bottom: 8px;
  }
  
  .margin-bottom9 {
    margin-bottom: 9px;
  }
  
  .margin-bottom10 {
    margin-bottom: 10px;
  }
  
  .margin-bottom11 {
    margin-bottom: 11px;
  }
  
  .margin-bottom12 {
    margin-bottom: 12px;
  }
  
  .margin-bottom13 {
    margin-bottom: 13px;
  }
  
  .margin-bottom14 {
    margin-bottom: 14px;
  }
  
  .margin-bottom15 {
    margin-bottom: 15px;
  }
  
  .margin-bottom16 {
    margin-bottom: 16px;
  }
  
  .margin-bottom17 {
    margin-bottom: 17px;
  }
  
  .margin-bottom18 {
    margin-bottom: 18px;
  }
  
  .margin-bottom19 {
    margin-bottom: 19px;
  }
  
  .margin-bottom20 {
    margin-bottom: 20px;
  }
  
  .margin-bottom21 {
    margin-bottom: 21px;
  }
  
  .margin-bottom22 {
    margin-bottom: 22px;
  }
  
  .margin-bottom23 {
    margin-bottom: 23px;
  }
  
  .margin-bottom24 {
    margin-bottom: 24px;
  }
  
  .margin-bottom25 {
    margin-bottom: 25px;
  }
  
  .margin-bottom26 {
    margin-bottom: 26px;
  }
  
  .margin-bottom27 {
    margin-bottom: 27px;
  }
  
  .margin-bottom28 {
    margin-bottom: 28px;
  }
  
  .margin-bottom29 {
    margin-bottom: 29px;
  }
  
  .margin-bottom30 {
    margin-bottom: 30px;
  }
  
  .margin-bottom31 {
    margin-bottom: 31px;
  }
  
  .margin-bottom32 {
    margin-bottom: 32px;
  }
  
  .margin-bottom33 {
    margin-bottom: 33px;
  }
  
  .margin-bottom34 {
    margin-bottom: 34px;
  }
  
  .margin-bottom35 {
    margin-bottom: 35px;
  }
  
  .margin-bottom36 {
    margin-bottom: 36px;
  }
  
  .margin-bottom37 {
    margin-bottom: 37px;
  }
  
  .margin-bottom38 {
    margin-bottom: 38px;
  }
  
  .margin-bottom39 {
    margin-bottom: 39px;
  }
  
  .margin-bottom40 {
    margin-bottom: 40px;
  }
  
  .margin-bottom41 {
    margin-bottom: 41px;
  }
  
  .margin-bottom42 {
    margin-bottom: 42px;
  }
  
  .margin-bottom43 {
    margin-bottom: 43px;
  }
  
  .margin-bottom44 {
    margin-bottom: 44px;
  }
  
  .margin-bottom45 {
    margin-bottom: 45px;
  }
  
  .margin-bottom46 {
    margin-bottom: 46px;
  }
  
  .margin-bottom47 {
    margin-bottom: 47px;
  }
  
  .margin-bottom48 {
    margin-bottom: 48px;
  }
  
  .margin-bottom49 {
    margin-bottom: 49px;
  }
  
  .margin-bottom50 {
    margin-bottom: 50px;
  }
  
  .margin-bottom51 {
    margin-bottom: 51px;
  }
  
  .margin-bottom52 {
    margin-bottom: 52px;
  }
  
  .margin-bottom53 {
    margin-bottom: 53px;
  }
  
  .margin-bottom54 {
    margin-bottom: 54px;
  }
  
  .margin-bottom55 {
    margin-bottom: 55px;
  }
  
  .margin-bottom56 {
    margin-bottom: 56px;
  }
  
  .margin-bottom57 {
    margin-bottom: 57px;
  }
  
  .margin-bottom58 {
    margin-bottom: 58px;
  }
  
  .margin-bottom59 {
    margin-bottom: 59px;
  }
  
  .margin-bottom60 {
    margin-bottom: 60px;
  }
  
  .margin-bottom61 {
    margin-bottom: 61px;
  }
  
  .margin-bottom62 {
    margin-bottom: 62px;
  }
  
  .margin-bottom63 {
    margin-bottom: 63px;
  }
  
  .margin-bottom64 {
    margin-bottom: 64px;
  }
  
  .margin-bottom65 {
    margin-bottom: 65px;
  }
  
  .margin-bottom66 {
    margin-bottom: 66px;
  }
  
  .margin-bottom67 {
    margin-bottom: 67px;
  }
  
  .margin-bottom68 {
    margin-bottom: 68px;
  }
  
  .margin-bottom69 {
    margin-bottom: 69px;
  }
  
  .margin-bottom70 {
    margin-bottom: 70px;
  }
  
  .margin-bottom71 {
    margin-bottom: 71px;
  }
  
  .margin-bottom72 {
    margin-bottom: 72px;
  }
  
  .margin-bottom73 {
    margin-bottom: 73px;
  }
  
  .margin-bottom74 {
    margin-bottom: 74px;
  }
  
  .margin-bottom75 {
    margin-bottom: 75px;
  }
  
  .margin-bottom76 {
    margin-bottom: 76px;
  }
  
  .margin-bottom77 {
    margin-bottom: 77px;
  }
  
  .margin-bottom78 {
    margin-bottom: 78px;
  }
  
  .margin-bottom79 {
    margin-bottom: 79px;
  }
  
  .margin-bottom80 {
    margin-bottom: 80px;
  }
  
  /* MARGIN-LEFT 1PX || 80PX */
  /* MARGIN-LEFT 1PX || 80PX */
  /* MARGIN-LEFT 1PX || 80PX */
  
  .margin-left1 {
    margin-left: 1px;
  }
  
  .margin-left2 {
    margin-left: 2px;
  }
  
  .margin-left3 {
    margin-left: 3px;
  }
  
  .margin-left4 {
    margin-left: 4px;
  }
  
  .margin-left5 {
    margin-left: 5px;
  }
  
  .margin-left6 {
    margin-left: 6px;
  }
  
  .margin-left7 {
    margin-left: 7px;
  }
  
  .margin-left8 {
    margin-left: 8px;
  }
  
  .margin-left9 {
    margin-left: 9px;
  }
  
  .margin-left10 {
    margin-left: 10px;
  }
  
  .margin-left11 {
    margin-left: 11px;
  }
  
  .margin-left12 {
    margin-left: 12px;
  }
  
  .margin-left13 {
    margin-left: 13px;
  }
  
  .margin-left14 {
    margin-left: 14px;
  }
  
  .margin-left15 {
    margin-left: 15px;
  }
  
  .margin-left16 {
    margin-left: 16px;
  }
  
  .margin-left17 {
    margin-left: 17px;
  }
  
  .margin-left18 {
    margin-left: 18px;
  }
  
  .margin-left19 {
    margin-left: 19px;
  }
  
  .margin-left20 {
    margin-left: 20px;
  }
  
  .margin-left21 {
    margin-left: 21px;
  }
  
  .margin-left22 {
    margin-left: 22px;
  }
  
  .margin-left23 {
    margin-left: 23px;
  }
  
  .margin-left24 {
    margin-left: 24px;
  }
  
  .margin-left25 {
    margin-left: 25px;
  }
  
  .margin-left26 {
    margin-left: 26px;
  }
  
  .margin-left27 {
    margin-left: 27px;
  }
  
  .margin-left28 {
    margin-left: 28px;
  }
  
  .margin-left29 {
    margin-left: 29px;
  }
  
  .margin-left30 {
    margin-left: 30px;
  }
  
  .margin-left31 {
    margin-left: 31px;
  }
  
  .margin-left32 {
    margin-left: 32px;
  }
  
  .margin-left33 {
    margin-left: 33px;
  }
  
  .margin-left34 {
    margin-left: 34px;
  }
  
  .margin-left35 {
    margin-left: 35px;
  }
  
  .margin-left36 {
    margin-left: 36px;
  }
  
  .margin-left37 {
    margin-left: 37px;
  }
  
  .margin-left38 {
    margin-left: 38px;
  }
  
  .margin-left39 {
    margin-left: 39px;
  }
  
  .margin-left40 {
    margin-left: 40px;
  }
  
  .margin-left41 {
    margin-left: 41px;
  }
  
  .margin-left42 {
    margin-left: 42px;
  }
  
  .margin-left43 {
    margin-left: 43px;
  }
  
  .margin-left44 {
    margin-left: 44px;
  }
  
  .margin-left45 {
    margin-left: 45px;
  }
  
  .margin-left46 {
    margin-left: 46px;
  }
  
  .margin-left47 {
    margin-left: 47px;
  }
  
  .margin-left48 {
    margin-left: 48px;
  }
  
  .margin-left49 {
    margin-left: 49px;
  }
  
  .margin-left50 {
    margin-left: 50px;
  }
  
  .margin-left51 {
    margin-left: 51px;
  }
  
  .margin-left52 {
    margin-left: 52px;
  }
  
  .margin-left53 {
    margin-left: 53px;
  }
  
  .margin-left54 {
    margin-left: 54px;
  }
  
  .margin-left55 {
    margin-left: 55px;
  }
  
  .margin-left56 {
    margin-left: 56px;
  }
  
  .margin-left57 {
    margin-left: 57px;
  }
  
  .margin-left58 {
    margin-left: 58px;
  }
  
  .margin-left59 {
    margin-left: 59px;
  }
  
  .margin-left60 {
    margin-left: 60px;
  }
  
  .margin-left61 {
    margin-left: 61px;
  }
  
  .margin-left62 {
    margin-left: 62px;
  }
  
  .margin-left63 {
    margin-left: 63px;
  }
  
  .margin-left64 {
    margin-left: 64px;
  }
  
  .margin-left65 {
    margin-left: 65px;
  }
  
  .margin-left66 {
    margin-left: 66px;
  }
  
  .margin-left67 {
    margin-left: 67px;
  }
  
  .margin-left68 {
    margin-left: 68px;
  }
  
  .margin-left69 {
    margin-left: 69px;
  }
  
  .margin-left70 {
    margin-left: 70px;
  }
  
  .margin-left71 {
    margin-left: 71px;
  }
  
  .margin-left72 {
    margin-left: 72px;
  }
  
  .margin-left73 {
    margin-left: 73px;
  }
  
  .margin-left74 {
    margin-left: 74px;
  }
  
  .margin-left75 {
    margin-left: 75px;
  }
  
  .margin-left76 {
    margin-left: 76px;
  }
  
  .margin-left77 {
    margin-left: 77px;
  }
  
  .margin-left78 {
    margin-left: 78px;
  }
  
  .margin-left79 {
    margin-left: 79px;
  }
  
  .margin-left80 {
    margin-left: 80px;
  }
  
  /* FONT-SIZE 1PX || 80PX */
  /* FONT-SIZE 1PX || 80PX */
  /* FONT-SIZE 1PX || 80PX */
  
  .fs1 {
    font-size: 1px;
  }
  
  .fs2 {
    font-size: 2px;
  }
  
  .fs3 {
    font-size: 3px;
  }
  
  .fs4 {
    font-size: 4px;
  }
  
  .fs5 {
    font-size: 5px;
  }
  
  .fs6 {
    font-size: 6px;
  }
  
  .fs7 {
    font-size: 7px;
  }
  
  .fs8 {
    font-size: 8px;
  }
  
  .fs9 {
    font-size: 9px;
  }
  
  .fs10 {
    font-size: 10px;
  }
  
  .fs11 {
    font-size: 11px;
  }
  
  .fs12 {
    font-size: 12px;
  }
  
  .fs13 {
    font-size: 13px;
  }
  
  .fs14 {
    font-size: 14px;
  }
  
  .fs15 {
    font-size: 15px;
  }
  
  .fs16 {
    font-size: 16px;
  }
  
  .fs17 {
    font-size: 17px;
  }
  
  .fs18 {
    font-size: 18px;
  }
  
  .fs19 {
    font-size: 19px;
  }
  
  .fs20 {
    font-size: 20px;
  }
  
  .fs21 {
    font-size: 21px;
  }
  
  .fs22 {
    font-size: 22px;
  }
  
  .fs23 {
    font-size: 23px;
  }
  
  .fs24 {
    font-size: 24px;
  }
  
  .fs25 {
    font-size: 25px;
  }
  
  .fs26 {
    font-size: 26px;
  }
  
  .fs27 {
    font-size: 27px;
  }
  
  .fs28 {
    font-size: 28px;
  }
  
  .fs29 {
    font-size: 29px;
  }
  
  .fs30 {
    font-size: 30px;
  }
  
  .fs31 {
    font-size: 31px;
  }
  
  .fs32 {
    font-size: 32px;
  }
  
  .fs33 {
    font-size: 33px;
  }
  
  .fs34 {
    font-size: 34px;
  }
  
  .fs35 {
    font-size: 35px;
  }
  
  .fs36 {
    font-size: 36px;
  }
  
  .fs37 {
    font-size: 37px;
  }
  
  .fs38 {
    font-size: 38px;
  }
  
  .fs39 {
    font-size: 39px;
  }
  
  .fs40 {
    font-size: 40px;
  }
  
  .fs41 {
    font-size: 41px;
  }
  
  .fs42 {
    font-size: 42px;
  }
  
  .fs43 {
    font-size: 43px;
  }
  
  .fs44 {
    font-size: 44px;
  }
  
  .fs45 {
    font-size: 45px;
  }
  
  .fs46 {
    font-size: 46px;
  }
  
  .fs47 {
    font-size: 47px;
  }
  
  .fs48 {
    font-size: 48px;
  }
  
  .fs49 {
    font-size: 49px;
  }
  
  .fs50 {
    font-size: 50px;
  }
  
  .fs51 {
    font-size: 51px;
  }
  
  .fs52 {
    font-size: 52px;
  }
  
  .fs53 {
    font-size: 53px;
  }
  
  .fs54 {
    font-size: 54px;
  }
  
  .fs55 {
    font-size: 55px;
  }
  
  .fs56 {
    font-size: 56px;
  }
  
  .fs57 {
    font-size: 57px;
  }
  
  .fs58 {
    font-size: 58px;
  }
  
  .fs59 {
    font-size: 59px;
  }
  
  .fs60 {
    font-size: 60px;
  }
  
  .fs61 {
    font-size: 61px;
  }
  
  .fs62 {
    font-size: 62px;
  }
  
  .fs63 {
    font-size: 63px;
  }
  
  .fs64 {
    font-size: 64px;
  }
  
  .fs65 {
    font-size: 65px;
  }
  
  .fs66 {
    font-size: 66px;
  }
  
  .fs67 {
    font-size: 67px;
  }
  
  .fs68 {
    font-size: 68px;
  }
  
  .fs69 {
    font-size: 69px;
  }
  
  .fs70 {
    font-size: 70px;
  }
  
  .fs71 {
    font-size: 71px;
  }
  
  .fs72 {
    font-size: 72px;
  }
  
  .fs73 {
    font-size: 73px;
  }
  
  .fs74 {
    font-size: 74px;
  }
  
  .fs75 {
    font-size: 75px;
  }
  
  .fs76 {
    font-size: 76px;
  }
  
  .fs77 {
    font-size: 77px;
  }
  
  .fs78 {
    font-size: 78px;
  }
  
  .fs79 {
    font-size: 79px;
  }
  
  .fs80 {
    font-size: 80px;
  }
  
  /* ALL TEXT ALIGN */
  /* ALL TEXT ALIGN */
  /* ALL TEXT ALIGN */
  
  .text-align-center {
    text-align: center;
  }
  
  .text-align-end {
    text-align: end;
  }
  
  .text-align-justify {
    text-align: justify;
  }
  
  .text-align-left {
    text-align: left;
  }
  
  .text-align-right {
    text-align: right;
  }
  
  .text-align-start {
    text-align: start;
  }
  
  .text-align-inherit {
    text-align: inherit;
  }
  
  .text-align-initial {
    text-align: inherit;
  }
  
  .text-align-unset {
    text-align: unset;
  }
  
  /* ALL FONT-WEIGHT */
  /* ALL FONT-WEIGHT */
  /* ALL FONT-WEIGHT */
  
  .font-weight-100 {
    font-weight: 100;
  }
  
  .font-weight-200 {
    font-weight: 200;
  }
  
  .font-weight-300 {
    font-weight: 300;
  }
  
  .font-weight-400 {
    font-weight: 400;
  }
  
  .font-weight-500 {
    font-weight: 500;
  }
  
  .font-weight-600 {
    font-weight: 600;
  }
  
  .font-weight-700 {
    font-weight: 700;
  }
  
  .font-weight-800 {
    font-weight: 800;
  }
  
  .font-weight-900 {
    font-weight: 900;
  }
  
  /* ALL JUSTIFY-CONTENT */
  /* ALL JUSTIFY-CONTENT */
  /* ALL JUSTIFY-CONTENT */
  
  .justify-content-baseline {
    justify-content: baseline;
  }
  
  .justify-content-center {
    justify-content: center;
  }
  
  .justify-content-end {
    justify-content: end;
  }
  
  .justify-content-first-baseline {
    justify-content: first baseline;
  }
  
  .justify-content-flex-end {
    justify-content: flex-end;
  }
  
  .justify-content-flex-start {
    justify-content: flex-start;
  }
  
  .justify-content-last-baseline {
    justify-content: last baseline;
  }
  
  .justify-content-left {
    justify-content: left;
  }
  
  .justify-content-right {
    justify-content: right;
  }
  
  .justify-content-safe {
    justify-content: safe;
  }
  
  .justify-content-space-around {
    justify-content: space-around;
  }
  
  .justify-content-space-between {
    justify-content: space-between;
  }
  
  .justify-content-space-evenly {
    justify-content: space-evenly;
  }
  
  .justify-content-start {
    justify-content: start;
  }
  
  .justify-content-stretch {
    justify-content: stretch;
  }
  
  .justify-content-unsafe {
    justify-content: unsafe;
  }
  
  .justify-content-inherit {
    justify-content: inherit;
  }
  
  .justify-conten-initial {
    justify-content: initial;
  }
  
  .justify-content-unset {
    justify-content: unset;
  }
  
  /* ALL JUSTIFY-SELF */
  /* ALL JUSTIFY-SELF */
  /* ALL JUSTIFY-SELF */
  
  .justify-self-auto {
    justify-self: auto;
  }
  
  .justify-self-baseline {
    justify-self: baseline;
  }
  
  .justify-self-center {
    justify-self: center;
  }
  
  .justify-self-end {
    justify-self: end;
  }
  
  .justify-self-first-baseline {
    justify-self: first baseline;
  }
  
  .justify-self-flex-end {
    justify-self: flex-end;
  }
  
  .justify-self-flex-start {
    justify-self: flex-start;
  }
  
  .justify-self-last-baseline {
    justify-self: last baseline;
  }
  
  .justify-self-left {
    justify-self: left;
  }
  
  .justify-self-normal {
    justify-self: normal;
  }
  
  .justify-self-right {
    justify-self: right;
  }
  
  .justify-self-save {
    justify-self: save;
  }
  
  .justify-self-self-end {
    justify-self: self-end;
  }
  
  .justify-self-self-start {
    justify-self: self-start;
  }
  
  .justify-self-start {
    justify-self: start;
  }
  
  .justify-self-stretch {
    justify-self: stretch;
  }
  
  .justify-self-unsave {
    justify-self: unsave;
  }
  
  .justify-self-inherit {
    justify-self: inherit;
  }
  
  .justify-self-initial {
    justify-self: initial;
  }
  
  .justify-self-unset {
    justify-self: unset;
  }
  
  /* ALL JUSTIFY-ITEMS */
  /* ALL JUSTIFY-ITEMS */
  /* ALL JUSTIFY-ITEMS */
  
  .justify-items-auto {
    justify-items: auto;
  }
  
  .justify-items-baseline {
    justify-items: baseline;
  }
  
  .justify-items-center {
    justify-items: center;
  }
  
  .justify-items-end {
    justify-items: end;
  }
  
  .justify-items-first-baseline {
    justify-items: first baseline;
  }
  
  .justify-items-flex-end {
    justify-items: flex-end;
  }
  
  .justify-items-flex-start {
    justify-items: flex-start;
  }
  
  .justify-items-last-baseline {
    justify-items: last baseline;
  }
  
  .justify-items-left {
    justify-items: left;
  }
  
  .justify-items-normal {
    justify-items: normal;
  }
  
  .justify-items-right {
    justify-items: right;
  }
  
  .justify-items-safe {
    justify-items: safe;
  }
  
  .justify-items-self-end {
    justify-items: self-end;
  }
  
  .justify-items-self-start {
    justify-items: self-start;
  }
  
  .justify-items-start {
    justify-items: start;
  }
  
  .justify-items-stretch {
    justify-items: stretch;
  }
  
  .justify-items-unsafe {
    justify-items: unsafe;
  }
  
  .justify-items-inherit {
    justify-items: inherit;
  }
  
  .justify-items-initial {
    justify-items: initial;
  }
  
  .justify-items-unset {
    justify-items: unset;
  }
  
  /* ALL TEXT-TRANSFORM */
  /* ALL TEXT-TRANSFORM */
  /* ALL TEXT-TRANSFORM */
  
  .text-transform-capitalize {
    text-transform: capitalize;
  }
  
  .text-transform-lowercase {
    text-transform: lowercase;
  }
  
  .text-transform-uppercase {
    text-transform: uppercase;
  }
  
  .text-transform-none {
    text-transform: none;
  }
  
  .text-transform-inherit {
    text-transform: inherit;
  }
  
  .text-transform-initial {
    text-transform: initial;
  }
  
  .text-transform-unset {
    text-transform: unset;
  }
  
  /* ALL TEXT-DECORATION */
  /* ALL TEXT-DECORATION */
  /* ALL TEXT-DECORATION */
  
  .text-decoration-dashed {
    text-decoration: dashed;
  }
  
  .text-decoration-dotted {
    text-decoration: dotted;
  }
  
  .text-decoration-double {
    text-decoration: double;
  }
  
  .text-decoration-line-through {
    text-decoration: line-through;
  }
  
  .text-decoration-none {
    text-decoration: none
  }
  
  .text-decoration-overline {
    text-decoration: overline;
  }
  
  .text-decoration-solid {
    text-decoration: solid;
  }
  
  .text-decoration-underline {
    text-decoration: underline;
  }
  
  .text-decoration-wavy {
    text-decoration: wavy;
  }
  
  /* ALL RESPONSIVE GRID */
  /* ALL RESPONSIVE GRID */
  /* ALL RESPONSIVE GRID */
  
  @media screen and (min-width: 300px) {
    .col2-300 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-300 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-300 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-300 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-300 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-300 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-300 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-300 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-300 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-300 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-300 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 400px) {
    .col2-400 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-400 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-400 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-400 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-400 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-400 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-400 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-400 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-400 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-400 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-400 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 500px) {
    .col2-500 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-500 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-500 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-500 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-500 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-500 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-500 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-500 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-500 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-500 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-500 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 600px) {
    .col2-600 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-600 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-600 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-600 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-600 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-600 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-600 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-600 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-600 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-600 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-600 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 700px) {
    .col2-700 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-700 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-700 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-700 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-700 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-700 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-700 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-700 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-700 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-700 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-700 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 800px) {
    .col2-800 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-800 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-800 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-800 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-800 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-800 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-800 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-800 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-800 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-800 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-800 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 900px) {
    .col2-900 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-900 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-900 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-900 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-900 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-900 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-900 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-900 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-900 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-900 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-900 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1000px) {
    .col2-1000 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1000 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1000 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1000 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1000 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1000 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1000 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1000 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1000 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1000 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1000 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1100px) {
    .col2-1100 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1100 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1100 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1100 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1100 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1100 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1100 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1100 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1100 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1100 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1100 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1200px) {
    .col2-1200 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1200 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1200 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1200 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1200 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1200 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1200 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1200 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1200 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1200 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1200 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1300px) {
    .col2-1300 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1300 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1300 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1300 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1300 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1300 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1300 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1300 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1300 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1300 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1300 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1400px) {
    .col2-1400 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1400 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1400 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1400 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1400 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1400 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1400 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1400 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1400 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1400 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1400 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1500px) {
    .col2-1500 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1500 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1500 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1500 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1500 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1500 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1500 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1500 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1500 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1500 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1500 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1600px) {
    .col2-1600 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1600 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1600 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1600 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1600 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1600 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1600 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1600 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1600 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1600 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1600 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1700px) {
    .col2-1700 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1700 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1700 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1700 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1700 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1700 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1700 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1700 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1700 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1700 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1700 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1800px) {
    .col2-1800 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1800 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1800 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1800 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1800 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1800 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1800 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1800 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1800 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1800 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1800 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 1900px) {
    .col2-1900 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-1900 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-1900 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-1900 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-1900 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-1900 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-1900 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-1900 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-1900 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-1900 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-1900 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  @media screen and (min-width: 2000px) {
    .col2-2000 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .col3-2000 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .col4-2000 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  
    .col5-2000 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  
    .col6-2000 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  
    .col7-2000 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  
    .col8-2000 {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  
    .col9-2000 {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
    }
  
    .col10-2000 {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
    }
  
    .col11-2000 {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
    }
  
    .col12-2000 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  /* BUTTON */
  /* BUTTON */
  /* BUTTON */
  
  .btn1 {
    color: black;
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  .btn2 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    background-color: rgba(79, 206, 54, 0.541);
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  .btn3 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    background-color: hwb(182 9% 27% / 0.644);
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  .btn4 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    background-color: rgba(54, 115, 206, 0.541);
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  .btn5 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    background-color: rgba(150, 54, 206, 0.541);
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  .btn6 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Basic', sans-serif;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    font-size: 16px;
    width: 50%;
    margin-left: 25%;
    background-color: rgba(192, 175, 25, 0.541);
    letter-spacing: 0.6px;
    box-shadow: 0px 0px 15px black;
  }
  
  @media screen and (min-width: 600px) {
    .btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
      width: 200px;
      margin: 0;
      height: 60px;
    }
  }  
  
  /* CENTER A ELEMENT */
  /* CENTER A ELEMENT */
  /* CENTER A ELEMENT */
  
  .center {
    display: grid;
    justify-self: center;
  }
  
  /* BORDER-RADIUS */
  /* BORDER-RADIUS */
  /* BORDER-RADIUS */
  
  .border-radius1 {
    border-radius: 1px;
  }
  
  .border-radius2 {
    border-radius: 2px;
  }
  
  .border-radius3 {
    border-radius: 3px;
  }
  
  .border-radius4 {
    border-radius: 4px;
  }
  
  .border-radius5 {
    border-radius: 5px;
  }
  
  .border-radius6 {
    border-radius: 6px;
  }
  
  .border-radius7 {
    border-radius: 7px;
  }
  
  .border-radius8 {
    border-radius: 8px;
  }
  
  .border-radius9 {
    border-radius: 9px;
  }
  
  .border-radius10 {
    border-radius: 10px;
  }
  
  .border-radius11 {
    border-radius: 11px;
  }
  
  .border-radius12 {
    border-radius: 12px;
  }
  
  .border-radius13 {
    border-radius: 13px;
  }
  
  .border-radius14 {
    border-radius: 14px;
  }
  
  .border-radius15 {
    border-radius: 15px;
  }
  
  .border-radius16 {
    border-radius: 16px;
  }
  
  .border-radius17 {
    border-radius: 17px;
  }
  
  .border-radius18 {
    border-radius: 18px;
  }
  
  .border-radius19 {
    border-radius: 19px;
  }
  
  .border-radius20 {
    border-radius: 20px;
  }
  
  .border-radius21 {
    border-radius: 21px;
  }
  
  .border-radius22 {
    border-radius: 22px;
  }
  
  .border-radius23 {
    border-radius: 23px;
  }
  
  .border-radius24 {
    border-radius: 24px;
  }
  
  .border-radius25 {
    border-radius: 25px;
  }
  
  .border-radius26 {
    border-radius: 26px;
  }
  
  .border-radius27 {
    border-radius: 27px;
  }
  
  .border-radius28 {
    border-radius: 28px;
  }
  
  .border-radius29 {
    border-radius: 29px;
  }
  
  .border-radius30 {
    border-radius: 30px;
  }
  
  .border-radius31 {
    border-radius: 31px;
  }
  
  .border-radius32 {
    border-radius: 32px;
  }
  
  .border-radius33 {
    border-radius: 33px;
  }
  
  .border-radius34 {
    border-radius: 34px;
  }
  
  .border-radius35 {
    border-radius: 35px;
  }
  
  .border-radius36 {
    border-radius: 36px;
  }
  
  .border-radius37 {
    border-radius: 37px;
  }
  
  .border-radius38 {
    border-radius: 38px;
  }
  
  .border-radius39 {
    border-radius: 39px;
  }
  
  .border-radius40 {
    border-radius: 40px;
  }
  
  .border-radius41 {
    border-radius: 41px;
  }
  
  .border-radius42 {
    border-radius: 42px;
  }
  
  .border-radius43 {
    border-radius: 43px;
  }
  
  .border-radius44 {
    border-radius: 44px;
  }
  
  .border-radius45 {
    border-radius: 45px;
  }
  
  .border-radius46 {
    border-radius: 46px;
  }
  
  .border-radius47 {
    border-radius: 47px;
  }
  
  .border-radius48 {
    border-radius: 48px;
  }
  
  .border-radius49 {
    border-radius: 49px;
  }
  
  .border-radius50 {
    border-radius: 50px;
  }
  
  .border-radius51 {
    border-radius: 51px;
  }
  
  .border-radius52 {
    border-radius: 52px;
  }
  
  .border-radius53 {
    border-radius: 53px;
  }
  
  .border-radius54 {
    border-radius: 54px;
  }
  
  .border-radius55 {
    border-radius: 55px;
  }
  
  .border-radius56 {
    border-radius: 56px;
  }
  
  .border-radius57 {
    border-radius: 57px;
  }
  
  .border-radius58 {
    border-radius: 58px;
  }
  
  .border-radius59 {
    border-radius: 59px;
  }
  
  .border-radius60 {
    border-radius: 60px;
  }
  
  .border-radius61 {
    border-radius: 61px;
  }
  
  .border-radius62 {
    border-radius: 62px;
  }
  
  .border-radius63 {
    border-radius: 63px;
  }
  
  .border-radius64 {
    border-radius: 64px;
  }
  
  .border-radius65 {
    border-radius: 65px;
  }
  
  .border-radius66 {
    border-radius: 66px;
  }
  
  .border-radius67 {
    border-radius: 67px;
  }
  
  .border-radius68 {
    border-radius: 68px;
  }
  
  .border-radius69 {
    border-radius: 69px;
  }
  
  .border-radius70 {
    border-radius: 70px;
  }
  
  .border-radius71 {
    border-radius: 71px;
  }
  
  .border-radius72 {
    border-radius: 72px;
  }
  
  .border-radius73 {
    border-radius: 73px;
  }
  
  .border-radius74 {
    border-radius: 74px;
  }
  
  .border-radius75 {
    border-radius: 75px;
  }
  
  .border-radius76 {
    border-radius: 76px;
  }
  
  .border-radius77 {
    border-radius: 77px;
  }
  
  .border-radius78 {
    border-radius: 78px;
  }
  
  .border-radius79 {
    border-radius: 79px;
  }
  
  .border-radius80 {
    border-radius: 80px;
  }
  
  .border-radius81 {
    border-radius: 81px;
  }
  
  .border-radius82 {
    border-radius: 82px;
  }
  
  .border-radius83 {
    border-radius: 83px;
  }
  
  .border-radius84 {
    border-radius: 84px;
  }
  
  .border-radius85 {
    border-radius: 85px;
  }
  
  .border-radius86 {
    border-radius: 86px;
  }
  
  .border-radius87 {
    border-radius: 87px;
  }
  
  .border-radius88 {
    border-radius: 88px;
  }
  
  .border-radius89 {
    border-radius: 89px;
  }
  
  .border-radius90 {
    border-radius: 90px;
  }
  
  .border-radius91 {
    border-radius: 91px;
  }
  
  .border-radius92 {
    border-radius: 92px;
  }
  
  .border-radius93 {
    border-radius: 93px;
  }
  
  .border-radius94 {
    border-radius: 94px;
  }
  
  .border-radius95 {
    border-radius: 95px;
  }
  
  .border-radius96 {
    border-radius: 96px;
  }
  
  .border-radius97 {
    border-radius: 97px;
  }
  
  .border-radius98 {
    border-radius: 98px;
  }
  
  .border-radius99 {
    border-radius: 99px;
  }
  
  .border-radius100 {
    border-radius: 100px;
  }
  
  /* WIDTH */
  /* WIDTH */
  /* WIDTH */
  
  .width-full {
    width: 100%;
  }
  
  .width5 {
    width: 5%;
  }
  
  .width10 {
    width: 10%;
  } 
  
  .width15 {
    width: 15%;
  } 
  
  .width20 {
    width: 20%;
  } 
  
  .width25 {
    width: 25%;
  } 
  
  .width30 {
    width: 30%;
  } 
  
  .width35 {
    width: 35%;
  } 
  
  .width40 {
    width: 40%;
  } 
  
  .width45 {
    width: 45%;
  } 
  
  .width50 {
    width: 50%;
  } 
  
  .width55 {
    width: 55%;
  }
  
  .width60 {
    width: 60%;
  } 
  
  .width65 {
    width: 65%;
  } 
  
  .width70 {
    width: 70%;
  } 
  
  .width75 {
    width: 75%;
  } 
  
  .width80 {
    width: 80%;
  } 
  
  .width85 {
    width: 85%;
  } 
  
  .width90 {
    width: 90%;
  } 
  
  .width95 {
    width: 95%;
  } 
  
  .width100 {
    width: 100%;
  } 
  
  
  /* HEIGHT */
  /* HEIGHT */
  /* HEIGHT */
  
  .height-full {
    height: 100vh;
  }
  
  .height5 {
    height: 5vh;
  }
  
  .height10 {
    height: 10vh;
  }
  
  .height15 {
    height: 15vh;
  }
  
  .height20 {
    height: 20vh;
  }
  
  .height25 {
    height: 25vh;
  }
  
  .height30 {
    height: 30vh;
  }
  
  .height35 {
    height: 35vh;
  }
  
  .height40 {
    height: 40vh;
  }
  
  .height45 {
    height: 45vh;
  }
  
  .height50 {
    height: 50vh;
  }
  
  .height55 {
    height: 55vh;
  }
  
  .height60 {
    height: 60vh;
  }
  
  .height65 {
    height: 65vh;
  }
  
  .height70 {
    height: 70vh;
  }
  
  .height75 {
    height: 75vh;
  }
  
  .heigh830 {
    height: 80vh;
  }
  
  .height85 {
    height: 85vh;
  }
  
  .height90 {
    height: 90vh;
  }
  
  .height95 {
    height: 95vh;
  }
  
  .height100 {
    height: 100vh;
  }
  `;

  function copyToClipboard() {
    navigator.clipboard.writeText(cssText);
    setCopied(true);
  }

  return (
    <div className="exemple-btn">
      <button onClick={copyToClipboard} className="btn3">
        {copied ? "Copié!" : "Copier le CSS"}
      </button>
      <style>{cssText}</style>
    </div>
  );
}

export default CopyButton;


