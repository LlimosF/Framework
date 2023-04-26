import React, { useState } from "react";

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const cssText = `
  body {
    margin: 0;
    padding: 0;
  }
  
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
    padding-top: 20px;
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
    padding: 29px;
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
  
  .padding-top68 {
    padding-top: 68px;
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
  `;

  function copyToClipboard() {
    navigator.clipboard.writeText(cssText);
    setCopied(true);
  }

  return (
    <div>
      <button onClick={copyToClipboard} className="btn5">
        {copied ? "Copié!" : "Copier le CSS"}
      </button>
      <style>{cssText}</style>
    </div>
  );
}

export default CopyButton;

