/******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Flag the module as loaded
		/******/ module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/ __webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/ __webpack_require__.d = function (exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/ __webpack_require__.r = function (exports) {
		/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module",
			});
			/******/
		}
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/ __webpack_require__.t = function (value, mode) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === "object" &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value,
		});
		/******/ if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/ __webpack_require__.n = function (module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/ __webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/ __webpack_require__.p = "/dist/";
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/ return __webpack_require__(
		(__webpack_require__.s = "./src/index.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./src/index.js":
			/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
			/*! no exports provided */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./styles/reset.css */ "./src/styles/reset.css"
					);
				/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./styles/index.scss */ "./src/styles/index.scss"
					);
				/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./styles/header.scss */ "./src/styles/header.scss"
					);
				/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_header_scss__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _styles_graphs_scss__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./styles/graphs.scss */ "./src/styles/graphs.scss"
					);
				/* harmony import */ var _styles_graphs_scss__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_graphs_scss__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var _styles_ramen_facts_scss__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./styles/ramen_facts.scss */ "./src/styles/ramen_facts.scss"
					);
				/* harmony import */ var _styles_ramen_facts_scss__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_ramen_facts_scss__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./styles/modal.scss */ "./src/styles/modal.scss"
					);
				/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_5___default =
					/*#__PURE__*/ __webpack_require__.n(
						_styles_modal_scss__WEBPACK_IMPORTED_MODULE_5__
					);
				/* harmony import */ var _scripts_exercise__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./scripts/exercise */ "./src/scripts/exercise.js"
					);
				/* harmony import */ var _scripts_exercise__WEBPACK_IMPORTED_MODULE_6___default =
					/*#__PURE__*/ __webpack_require__.n(
						_scripts_exercise__WEBPACK_IMPORTED_MODULE_6__
					);
				/* harmony import */ var _scripts_ramen__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(/*! ./scripts/ramen */ "./src/scripts/ramen.js");
				/* harmony import */ var _scripts_ramen__WEBPACK_IMPORTED_MODULE_7___default =
					/*#__PURE__*/ __webpack_require__.n(
						_scripts_ramen__WEBPACK_IMPORTED_MODULE_7__
					);
				/* harmony import */ var _scripts_footer__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! ./scripts/footer */ "./src/scripts/footer.js"
					);
				/* harmony import */ var _scripts_footer__WEBPACK_IMPORTED_MODULE_8___default =
					/*#__PURE__*/ __webpack_require__.n(
						_scripts_footer__WEBPACK_IMPORTED_MODULE_8__
					);
				/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(/*! ./scripts/modal */ "./src/scripts/modal.js");
				/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_9___default =
					/*#__PURE__*/ __webpack_require__.n(
						_scripts_modal__WEBPACK_IMPORTED_MODULE_9__
					);

				/***/
			},

		/***/ "./src/scripts/exercise.js":
			/*!*********************************!*\
  !*** ./src/scripts/exercise.js ***!
  \*********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				document.addEventListener("DOMContentLoaded", function () {
					var margin = {
						top: 50,
						bottom: 150,
						left: -100,
						right: 30,
					};
					var width = 400;
					var height = 650;
					var svg = d3
						.select(".d3-exercise")
						.append("svg")
						.attr("viewBox", [0, 0, width, height])
						.attr("preserveAspectRatio", "xMidYMid meet")
						.attr("height", height - margin.top - margin.bottom) // chart height
						.attr("width", width - margin.left - margin.right); // chart width

					var x = d3
						.scaleBand()
						.range([0, width - margin.right])
						.padding(0.1);
					var xAxis = svg
						.append("g")
						.attr(
							"transform",
							"translate(0, ".concat(height - margin.bottom, ")")
						);
					var y = d3.scaleLinear().range([height - margin.bottom, margin.top]);
					var yAxis = svg
						.append("g")
						.attr("class", "yAxis exercise")
						.attr(
							"transform",
							"translate(".concat(width - margin.right, ", 0)")
						);
					svg
						.append("text")
						.attr("class", "label exercise")
						.attr("x", height / 2.5)
						.attr("y", -width * 1.1)
						.attr("transform", "rotate(90)")
						.attr("text-anchor", "middle")
						.text("Calories")
						.attr("font-size", "25px"); // use update as a function to use closures below

					function update(time) {
						d3.csv(
							"https://raw.githubusercontent.com/iamdanahn/RamenTime/main/assets/exercise.csv",
							function (d) {
								// sets getters to use in fn(update)
								// iterates indiviudal datum of csv
								return {
									Exercise: d.Exercise,
									Calories: +d.Calories,
									Hour: +d.Hour,
								};
							}
						).then(function (data) {
							// promise success replies with whole data
							// domain == data values displayed
							x.domain(
								data.map(function (d) {
									return d.Exercise;
								})
							);
							xAxis
								.transition()
								.duration(1000)
								.call(d3.axisBottom(x))
								.attr("class", "xAxis exercise")
								.selectAll("text")
								.attr("transform", "rotate(-25)");
							y.domain([
								0,
								d3.max(data, function (d) {
									// debugger
									return d["".concat(time)];
								}),
							]).nice();
							yAxis.transition().duration(500).call(d3.axisRight(y));
							var tip = d3
								.select("body")
								.append("div")
								.style("opacity", 0)
								.attr("class", "d3-tip exercise"); // when

							var u = svg.selectAll("rect").data(data);
							u.exit().remove();
							u.enter()
								.append("rect")
								.attr("class", "bar exercise")
								.merge(u) // .transition()
								// .duration(500)
								.attr("x", function (d) {
									return x(d.Exercise);
								})
								.attr("y", function (d) {
									return y(0);
								}) // y axis all set to y(0), in this case 500
								.attr("width", x.bandwidth())
								.attr("height", function (d) {
									return 0;
								}); // set height to 0 for animation below

							svg
								.selectAll("rect")
								.on("mouseover", function (e, d) {
									tip.transition().duration(300).style("opacity", 0.8);
									tip
										.html(
											"Exercise: "
												.concat(d.Exercise, " <br/>\n              Calories: ")
												.concat(+d["".concat(time)], " <br/>")
										)
										.style("left", "".concat(e.clientX - 50, "px"))
										.style("top", "".concat(e.clientY, "px"));
								})
								.on("mousemove", function (e) {
									tip
										.style("left", "".concat(e.clientX - 100, "px"))
										.style("top", "".concat(e.clientY - 50, "px"));
								})
								.on("mouseout", function (d) {
									tip.transition().duration(100).style("opacity", 0);
								}); // svg.selectAll("rect").transition().duration(1000)

							svg
								.selectAll("rect")
								.transition()
								.duration(800)
								.attr("y", function (d) {
									return y(d["".concat(time)]);
								})
								.attr("height", function (d) {
									return y(0) - y(d["".concat(time)]);
								})
								.delay(function (d, i) {
									// console.log(i)
									return i * 100;
								});
							u.exit().remove();
						});
					}

					d3.selectAll(".btn-exercise").on("click", function () {
						// debugger
						update(this.value);
					});
					update("Calories");
				});

				/***/
			},

		/***/ "./src/scripts/footer.js":
			/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				var factSpeed = 7 * 1000;
				document.addEventListener("DOMContentLoaded", function (event) {
					var data = d3
						.csv(
							"https://raw.githubusercontent.com/iamdanahn/RamenTime/ramenrow/assets/ramen_facts.csv",
							function (d) {
								return {
									facts: d["Ramen Facts"],
								};
							}
						)
						.then(function (data) {
							function move() {
								var i = 0;

								if (i === 0) {
									i = 1;
									var bar = document.getElementById("time-bar");
									var width = 1;
									var id = setInterval(frame, 70);

									function frame() {
										if (width >= 100) {
											clearInterval(id);
											i = 0;
										} else {
											width++;
											bar.style.width = "".concat(width, "%");
										}
									}
								}
							} // rotating ramen facts

							function ramenFact(i) {
								if (data.length > i) {
									setTimeout(function () {
										//prints ramen fact and iterates up by 1
										document.getElementById("ramen-fact").innerHTML =
											data[i].facts;
										ramenFact(++i);
									}, factSpeed); // move()
								} else if (data.length === i) {
									// creates a loop to start back at index 0
									ramenFact(0); // move()
								}
							}

							ramenFact(0);
						});
				});

				/***/
			},

		/***/ "./src/scripts/modal.js":
			/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				document.addEventListener("DOMContentLoaded", function (event) {
					// console.log(event);
					var modal = document.getElementsByClassName("modal")[0];
					var closer = document.getElementsByClassName("modal-close")[0]; // debugger

					closer.addEventListener("click", function () {
						modal.style.display = "none";
					});
					window.addEventListener("click", function (event) {
						// targets modal because entire background is modal
						if (event.target === modal) {
							modal.style.display = "none";
						}
					});
				});

				/***/
			},

		/***/ "./src/scripts/ramen.js":
			/*!******************************!*\
  !*** ./src/scripts/ramen.js ***!
  \******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				// Baseline Nutrition Facts
				// Baseline 100%,2000,75,20,0,300,2300,275,28,0,0
				document.addEventListener("DOMContentLoaded", function () {
					d3.csv(
						"https://raw.githubusercontent.com/iamdanahn/RamenTime/main/assets/nutrition_facts.csv",
						function (d) {
							return {
								brand: d.Brand,
								type: d.Ramen,
								calories: +d.Calories,
								totalFat: +d["Total Fat (g)"],
								sFat: +d["Saturated Fat (g)"],
								tFat: +d["Trans Fat (g)"],
								cholesterol: +d["Cholesterol (mg)"],
								sodium: +d["Sodium (mg)"],
								carbs: +d["Total Carbohydrates (g)"],
								fiber: +d["Dietary Fiber (g)"],
								sugars: +d.Sugars,
								protein: +d.Protein,
							};
						}
					).then(function (data) {
						render(data);
						// console.log(data);
					}); // data xfer from d4.csv promise

					var render = function render(data) {
						var width = 700;
						var height = 650;
						var margin = {
							top: 50,
							bottom: 150,
							left: 20,
							right: -100,
						}; // creates svg element

						var svg = d3
							.select(".d3-ramen")
							.append("svg") // adds svg ele as child to d3-div
							.attr("viewBox", [0, 0, width, height]) // creates the SVG box
							.attr("preserveAspectRatio", "xMidYMid meet") // preserves aspect ratio
							.attr("height", height - margin.top - margin.bottom) // chart height
							.attr("width", width); // chart width
						// creates x scale

						var x = d3
							.scaleBand() // creates "bands"/columns
							.range([margin.left / 2, width - margin.right]) // x axis range
							.padding(0.1) // reg css padding
							.domain(
								data.map(function (d) {
									return d.type;
								})
							); //d3.range(data.length)) // dynamic range of elements
						// label on bottom

						function xAxis(g) {
							// debugger
							g.call(d3.axisBottom(x))
								.attr("class", "xText")
								.attr("font-size", "20px") // original font was too small
								.attr(
									"transform",
									"translate(0, ".concat(height - margin.bottom, ")")
								) // x-axis line was showing on top
								.selectAll("text")
								.transition()
								.duration(1000)
								.attr("transform", "rotate(-25)")
								.attr("text-anchor", "end");
						}

						svg.append("g").call(xAxis); // create y scale

						var y = d3
							.scaleLinear() // scales your data to range size
							.range([height - margin.bottom, margin.top]) // y axis range
							.domain([
								0,
								d3.max(data, function (d) {
									return d.calories;
								}),
							]) // y axis scaling
							.nice(); // adds remaining top tick if left out
						// label on left

						function yAxis(g) {
							g.call(d3.axisLeft(y)) //.ticks(null, data.format))
								.attr("font-size", "15px")
								.append("text")
								.attr("class", "yText");
						}

						svg.append("g").call(yAxis); // tooltip above bar

						var tip = d3
							.select("body")
							.append("div")
							.style("opacity", 0)
							.attr("class", "d3-tip ramen"); // creates the bars

						var bars = svg
							.append("g") // adds group ele to svg ele
							.selectAll("rect") // selects all rectangles, if none found, creates empty selection
							.data(data) //.sort((a, b) => d3.descending(a.calories, b.calories)))
							.join("rect") // similar to .join((enter) => enter.append('rect'))
							.attr("class", "bar ramen") // adds classname, now can be modified in scss
							.attr("x", function (d) {
								return x(d.type);
							}) //, i) => x(i)) // places elements in order on x axis, d=data, i=index
							.attr("width", x.bandwidth()) // calcs thickness of bars
							.attr("y", function (d) {
								return y(0);
							})
							.attr("height", function (d) {
								return 0;
							});
						svg
							.selectAll("rect")
							.transition()
							.duration(800)
							.attr("y", function (d) {
								return y(d.calories);
							})
							.attr("height", function (d) {
								return y(0) - y(d.calories);
							})
							.delay(function (d, i) {
								return i * 100;
							});
						svg
							.selectAll("rect")
							.on("mouseover", function (e, d) {
								// e == mouse event
								tip.transition().duration(300).style("opacity", 0.8); // console.log(e)
								// console.log(d)

								tip
									.html(
										"Brand: "
											.concat(d.brand, " <br/>\n           Total fat(g): ")
											.concat(
												d.totalFat,
												" <br/>\n           Saturated fat(g): "
											)
											.concat(d.sFat, " <br/>\n           Trans fat(g): ")
											.concat(d.tFat, " <br/>\n           Cholesterol (mg): ")
											.concat(d.cholesterol, " <br/>\n           Sodium (mg): ")
											.concat(
												d.sodium,
												" <br/>\n           Dietary Fiber (g): "
											)
											.concat(d.fiber, " <br/>\n           Sugar (g): ")
											.concat(d.sugars, " <br/>\n           Protein (g): ")
											.concat(d.protein, " <br/>\n         ")
									)
									.style("left", "".concat(e.clientX, "px"))
									.style("top", "".concat(e.clientY, "px"));
							})
							.on("mousemove", function (e, d) {
								// console.log(e)
								// console.log(d)
								tip
									.style("left", "".concat(e.clientX, "px"))
									.style("top", "".concat(e.clientY - 50, "px"));
							})
							.on("mouseout", function (e, d) {
								// console.log(e)
								// console.log(d)
								tip.transition().duration(100).style("opacity", 0);
							}) // used for testing
							.attr("value", function (d, i) {
								return d.type;
							})
							.on("click", function (d) {
								return console.log(d.toElement.__data__.type);
							}); // Calories label on left side

						svg
							.append("text")
							.attr("class", "label ramenY")
							.attr("x", -height / 2 + 40)
							.attr("y", -width * 0.1)
							.attr("transform", "rotate(-90)")
							.attr("text-anchor", "middle")
							.text("Calories")
							.attr("font-size", "25px");
						d3.select("input").on("change", sort); // const sortTimeout = setTimeout(() => {
						//   // debugger
						//   d3.select("input").property("checked", true).each(sort)
						// }, 500)

						function sort() {
							// clearTimeout(sortTimeout)
							// debugger
							var newX = x
								.domain(
									data
										.sort(
											this.checked
												? function (a, b) {
														return b.calories - a.calories;
												  }
												: function (a, b) {
														return d3.ascending(a.type, b.type);
												  }
										)
										.map(function (d) {
											return d.type;
										})
								)
								.copy();
							svg.selectAll("rect").sort(function (a, b) {
								return d3.descending(a.calories, b.calories);
							});

							var transition = svg.transition().duration(500),
								delay = function delay(d, i) {
									return i * 25;
								};

							transition
								.selectAll("rect")
								.delay(delay)
								.attr("x", function (d) {
									return newX(d.type);
								});
							transition
								.select(".xText")
								.call(xAxis)
								.selectAll("g")
								.delay(delay);
						}

						svg.node();
					};
				});

				/***/
			},

		/***/ "./src/styles/graphs.scss":
			/*!********************************!*\
  !*** ./src/styles/graphs.scss ***!
  \********************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ "./src/styles/header.scss":
			/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ "./src/styles/index.scss":
			/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ "./src/styles/modal.scss":
			/*!*******************************!*\
  !*** ./src/styles/modal.scss ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ "./src/styles/ramen_facts.scss":
			/*!*************************************!*\
  !*** ./src/styles/ramen_facts.scss ***!
  \*************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ "./src/styles/reset.css":
			/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/******/
	}
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4ZXJjaXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yYW1lbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dyYXBocy5zY3NzPzhjZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzcz9lNmExIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbW9kYWwuc2Nzcz8wN2QyIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmFtZW5fZmFjdHMuc2Nzcz9hMTkyIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzJlMTciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsInRleHQiLCJ1cGRhdGUiLCJ0aW1lIiwiY3N2IiwiZCIsIkV4ZXJjaXNlIiwiQ2Fsb3JpZXMiLCJIb3VyIiwidGhlbiIsImRhdGEiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwiYXhpc0JvdHRvbSIsInNlbGVjdEFsbCIsIm1heCIsIm5pY2UiLCJheGlzUmlnaHQiLCJ0aXAiLCJzdHlsZSIsInUiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJtZXJnZSIsImJhbmR3aWR0aCIsIm9uIiwiZSIsImh0bWwiLCJjbGllbnRYIiwiY2xpZW50WSIsImRlbGF5IiwiaSIsInZhbHVlIiwiZmFjdFNwZWVkIiwiZXZlbnQiLCJmYWN0cyIsIm1vdmUiLCJiYXIiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwic2V0SW50ZXJ2YWwiLCJmcmFtZSIsImNsZWFySW50ZXJ2YWwiLCJyYW1lbkZhY3QiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsb3NlciIsImRpc3BsYXkiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJicmFuZCIsIkJyYW5kIiwidHlwZSIsIlJhbWVuIiwiY2Fsb3JpZXMiLCJ0b3RhbEZhdCIsInNGYXQiLCJ0RmF0IiwiY2hvbGVzdGVyb2wiLCJzb2RpdW0iLCJjYXJicyIsImZpYmVyIiwic3VnYXJzIiwiU3VnYXJzIiwicHJvdGVpbiIsIlByb3RlaW4iLCJyZW5kZXIiLCJnIiwiYXhpc0xlZnQiLCJiYXJzIiwiam9pbiIsInRvRWxlbWVudCIsIl9fZGF0YV9fIiwic29ydCIsIm5ld1giLCJjaGVja2VkIiwiYSIsImIiLCJhc2NlbmRpbmciLCJjb3B5IiwiZGVzY2VuZGluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RUFBd0NvQixTQUF4QyxDQUFrRCxHQUFsRCxFQUF1RGlCLEtBQXZELENBQTZEQSxLQUE3RDtBQUNEOztBQUVEOUMsT0FBRyxDQUFDc0csSUFBSjtBQUNELEdBbkxEO0FBb0xELENBN01ELEU7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZXMvaGVhZGVyLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZXMvZ3JhcGhzLnNjc3NcIlxuaW1wb3J0IFwiLi9zdHlsZXMvcmFtZW5fZmFjdHMuc2Nzc1wiXG5pbXBvcnQgXCIuL3N0eWxlcy9tb2RhbC5zY3NzXCJcblxuXG5pbXBvcnQgXCIuL3NjcmlwdHMvZXhlcmNpc2VcIlxuaW1wb3J0IFwiLi9zY3JpcHRzL3JhbWVuXCJcbmltcG9ydCBcIi4vc2NyaXB0cy9mb290ZXJcIlxuaW1wb3J0IFwiLi9zY3JpcHRzL21vZGFsXCIiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA1MCwgYm90dG9tOiAxNTAsIGxlZnQ6IC0xMDAsIHJpZ2h0OiAzMCB9XG4gIGNvbnN0IHdpZHRoID0gNDAwXG4gIGNvbnN0IGhlaWdodCA9IDY1MFxuXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcIi5kMy1leGVyY2lzZVwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcInZpZXdCb3hcIiwgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxuICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSkgLy8gY2hhcnQgaGVpZ2h0XG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0KSAvLyBjaGFydCB3aWR0aFxuXG4gIGNvbnN0IHggPSBkM1xuICAgIC5zY2FsZUJhbmQoKVxuICAgIC5yYW5nZShbMCwgd2lkdGggLSBtYXJnaW4ucmlnaHRdKVxuICAgIC5wYWRkaW5nKDAuMSlcbiAgY29uc3QgeEF4aXMgPSBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHQgLSBtYXJnaW4uYm90dG9tfSlgKVxuXG4gIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcbiAgY29uc3QgeUF4aXMgPSBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpcyBleGVyY2lzZVwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt3aWR0aCAtIG1hcmdpbi5yaWdodH0sIDApYClcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbCBleGVyY2lzZVwiKVxuICAgIC5hdHRyKFwieFwiLCBoZWlnaHQgLyAyLjUpXG4gICAgLmF0dHIoXCJ5XCIsIC13aWR0aCAqIDEuMSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJDYWxvcmllc1wiKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjVweFwiKVxuXG4gIC8vIHVzZSB1cGRhdGUgYXMgYSBmdW5jdGlvbiB0byB1c2UgY2xvc3VyZXMgYmVsb3dcbiAgZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcbiAgICBkMy5jc3YoXG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pYW1kYW5haG4vUmFtZW5UaW1lL21haW4vYXNzZXRzL2V4ZXJjaXNlLmNzdlwiLFxuICAgICAgKGQpID0+IHtcbiAgICAgICAgLy8gc2V0cyBnZXR0ZXJzIHRvIHVzZSBpbiBmbih1cGRhdGUpXG4gICAgICAgIC8vIGl0ZXJhdGVzIGluZGl2aXVkYWwgZGF0dW0gb2YgY3N2XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgRXhlcmNpc2U6IGQuRXhlcmNpc2UsXG4gICAgICAgICAgQ2Fsb3JpZXM6ICtkLkNhbG9yaWVzLFxuICAgICAgICAgIEhvdXI6ICtkLkhvdXIsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyBwcm9taXNlIHN1Y2Nlc3MgcmVwbGllcyB3aXRoIHdob2xlIGRhdGFcblxuICAgICAgLy8gZG9tYWluID09IGRhdGEgdmFsdWVzIGRpc3BsYXllZFxuICAgICAgeC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQuRXhlcmNpc2UpKVxuICAgICAgeEF4aXNcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzIGV4ZXJjaXNlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC0yNSlcIilcblxuICAgICAgeS5kb21haW4oW1xuICAgICAgICAwLFxuICAgICAgICBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgIHJldHVybiBkW2Ake3RpbWV9YF1cbiAgICAgICAgfSksXG4gICAgICBdKS5uaWNlKClcbiAgICAgIHlBeGlzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLmNhbGwoZDMuYXhpc1JpZ2h0KHkpKVxuXG4gICAgICBjb25zdCB0aXAgPSBkM1xuICAgICAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImQzLXRpcCBleGVyY2lzZVwiKVxuXG4gICAgICAvLyB3aGVuXG4gICAgICBjb25zdCB1ID0gc3ZnLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShkYXRhKVxuICAgICAgdS5leGl0KCkucmVtb3ZlKClcbiAgICAgIHUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyIGV4ZXJjaXNlXCIpXG4gICAgICAgIC5tZXJnZSh1KVxuICAgICAgICAvLyAudHJhbnNpdGlvbigpXG4gICAgICAgIC8vIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5hdHRyKFwieFwiLCAoZCkgPT4geChkLkV4ZXJjaXNlKSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5KDApKSAvLyB5IGF4aXMgYWxsIHNldCB0byB5KDApLCBpbiB0aGlzIGNhc2UgNTAwXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IDApIC8vIHNldCBoZWlnaHQgdG8gMCBmb3IgYW5pbWF0aW9uIGJlbG93XG5cbiAgICAgIHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGUsIGQpID0+IHtcbiAgICAgICAgICB0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMCkuc3R5bGUoXCJvcGFjaXR5XCIsIDAuOClcbiAgICAgICAgICB0aXBcbiAgICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgICBgRXhlcmNpc2U6ICR7ZC5FeGVyY2lzZX0gPGJyLz5cbiAgICAgICAgICAgICAgQ2Fsb3JpZXM6ICR7K2RbYCR7dGltZX1gXX0gPGJyLz5gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBgJHtlLmNsaWVudFggLSA1MH1weGApXG4gICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgYCR7ZS5jbGllbnRZfXB4YClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgdGlwXG4gICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGAke2UuY2xpZW50WCAtIDEwMH1weGApXG4gICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgYCR7ZS5jbGllbnRZIC0gNTB9cHhgKVxuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCkgPT4ge1xuICAgICAgICAgIHRpcC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwKS5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgICAgfSlcblxuICAgICAgLy8gc3ZnLnNlbGVjdEFsbChcInJlY3RcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApXG5cbiAgICAgIHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig4MDApXG4gICAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geShkW2Ake3RpbWV9YF0pKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4geSgwKSAtIHkoZFtgJHt0aW1lfWBdKSlcbiAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaSlcbiAgICAgICAgICByZXR1cm4gaSAqIDEwMFxuICAgICAgICB9KVxuXG4gICAgICB1LmV4aXQoKS5yZW1vdmUoKVxuICAgIH0pXG4gIH1cblxuICBkMy5zZWxlY3RBbGwoXCIuYnRuLWV4ZXJjaXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgdXBkYXRlKHRoaXMudmFsdWUpXG4gIH0pXG5cbiAgdXBkYXRlKFwiQ2Fsb3JpZXNcIilcbn0pXG4iLCJjb25zdCBmYWN0U3BlZWQgPSA3ICogMTAwMFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgXG4gIGNvbnN0IGRhdGEgPSBkM1xuICAuY3N2KFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2lhbWRhbmFobi9SYW1lblRpbWUvcmFtZW5yb3cvYXNzZXRzL3JhbWVuX2ZhY3RzLmNzdlwiLFxuICAgIChkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmYWN0czogZFtcIlJhbWVuIEZhY3RzXCJdLFxuICAgICAgfVxuICAgIH0sXG4gICAgKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBmdW5jdGlvbiBtb3ZlKCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcbiAgICAgICAgICBpID0gMTtcbiAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWUtYmFyXCIpXG4gICAgICAgICAgbGV0IHdpZHRoID0gMTtcbiAgICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChmcmFtZSwgNzApO1xuXG4gICAgICAgICAgZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgICAgICAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoKytcbiAgICAgICAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9JWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHJvdGF0aW5nIHJhbWVuIGZhY3RzXG4gICAgICBmdW5jdGlvbiByYW1lbkZhY3QoaSkge1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL3ByaW50cyByYW1lbiBmYWN0IGFuZCBpdGVyYXRlcyB1cCBieSAxXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbWVuLWZhY3RcIikuaW5uZXJIVE1MID0gZGF0YVtpXS5mYWN0c1xuICAgICAgICAgICAgcmFtZW5GYWN0KCsraSlcbiAgICAgICAgICB9LCBmYWN0U3BlZWQpXG4gICAgICAgICAgLy8gbW92ZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPT09IGkpIHtcbiAgICAgICAgICAvLyBjcmVhdGVzIGEgbG9vcCB0byBzdGFydCBiYWNrIGF0IGluZGV4IDBcbiAgICAgICAgICByYW1lbkZhY3QoMClcbiAgICAgICAgICAvLyBtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgXG5cblxuXG4gICAgICByYW1lbkZhY3QoMClcbiAgICB9KVxufSlcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhldmVudClcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbFwiKVswXVxuICBjb25zdCBjbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY2xvc2VcIilbMF1cbiAgLy8gZGVidWdnZXJcblxuICBjbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfSlcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIC8vIHRhcmdldHMgbW9kYWwgYmVjYXVzZSBlbnRpcmUgYmFja2dyb3VuZCBpcyBtb2RhbFxuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQmFzZWxpbmUgTnV0cml0aW9uIEZhY3RzXG4vLyBCYXNlbGluZSAxMDAlLDIwMDAsNzUsMjAsMCwzMDAsMjMwMCwyNzUsMjgsMCwwXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZDMuY3N2KFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2lhbWRhbmFobi9SYW1lblRpbWUvbWFpbi9hc3NldHMvbnV0cml0aW9uX2ZhY3RzLmNzdlwiLFxuICAgIChkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBicmFuZDogZC5CcmFuZCxcbiAgICAgICAgdHlwZTogZC5SYW1lbixcbiAgICAgICAgY2Fsb3JpZXM6ICtkLkNhbG9yaWVzLFxuICAgICAgICB0b3RhbEZhdDogK2RbXCJUb3RhbCBGYXQgKGcpXCJdLFxuICAgICAgICBzRmF0OiArZFtcIlNhdHVyYXRlZCBGYXQgKGcpXCJdLFxuICAgICAgICB0RmF0OiArZFtcIlRyYW5zIEZhdCAoZylcIl0sXG4gICAgICAgIGNob2xlc3Rlcm9sOiArZFtcIkNob2xlc3Rlcm9sIChtZylcIl0sXG4gICAgICAgIHNvZGl1bTogK2RbXCJTb2RpdW0gKG1nKVwiXSxcbiAgICAgICAgY2FyYnM6ICtkW1wiVG90YWwgQ2FyYm9oeWRyYXRlcyAoZylcIl0sXG4gICAgICAgIGZpYmVyOiArZFtcIkRpZXRhcnkgRmliZXIgKGcpXCJdLFxuICAgICAgICBzdWdhcnM6ICtkLlN1Z2FycyxcbiAgICAgICAgcHJvdGVpbjogK2QuUHJvdGVpbixcbiAgICAgIH1cbiAgICB9LFxuICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICByZW5kZXIoZGF0YSlcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9KVxuXG4gIC8vIGRhdGEgeGZlciBmcm9tIGQ0LmNzdiBwcm9taXNlXG4gIGNvbnN0IHJlbmRlciA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSA3MDBcbiAgICBjb25zdCBoZWlnaHQgPSA2NTBcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogMTUwLCBsZWZ0OiAyMCwgcmlnaHQ6IC0xMDAgfVxuXG4gICAgLy8gY3JlYXRlcyBzdmcgZWxlbWVudFxuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KFwiLmQzLXJhbWVuXCIpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpIC8vIGFkZHMgc3ZnIGVsZSBhcyBjaGlsZCB0byBkMy1kaXZcbiAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pIC8vIGNyZWF0ZXMgdGhlIFNWRyBib3hcbiAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIikgLy8gcHJlc2VydmVzIGFzcGVjdCByYXRpb1xuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20pIC8vIGNoYXJ0IGhlaWdodFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkgLy8gY2hhcnQgd2lkdGhcblxuICAgIC8vIGNyZWF0ZXMgeCBzY2FsZVxuICAgIGNvbnN0IHggPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpIC8vIGNyZWF0ZXMgXCJiYW5kc1wiL2NvbHVtbnNcbiAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQgLyAyLCB3aWR0aCAtIG1hcmdpbi5yaWdodF0pIC8vIHggYXhpcyByYW5nZVxuICAgICAgLnBhZGRpbmcoMC4xKSAvLyByZWcgY3NzIHBhZGRpbmdcbiAgICAgIC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQudHlwZSkpIC8vZDMucmFuZ2UoZGF0YS5sZW5ndGgpKSAvLyBkeW5hbWljIHJhbmdlIG9mIGVsZW1lbnRzXG5cbiAgICAvLyBsYWJlbCBvbiBib3R0b21cbiAgICBmdW5jdGlvbiB4QXhpcyhnKSB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgZy5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4VGV4dFwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIikgLy8gb3JpZ2luYWwgZm9udCB3YXMgdG9vIHNtYWxsXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHQgLSBtYXJnaW4uYm90dG9tfSlgKSAvLyB4LWF4aXMgbGluZSB3YXMgc2hvd2luZyBvbiB0b3BcbiAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTI1KVwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgfVxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoeEF4aXMpXG5cbiAgICAvLyBjcmVhdGUgeSBzY2FsZVxuICAgIGNvbnN0IHkgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKCkgLy8gc2NhbGVzIHlvdXIgZGF0YSB0byByYW5nZSBzaXplXG4gICAgICAucmFuZ2UoW2hlaWdodCAtIG1hcmdpbi5ib3R0b20sIG1hcmdpbi50b3BdKSAvLyB5IGF4aXMgcmFuZ2VcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC5jYWxvcmllcyldKSAvLyB5IGF4aXMgc2NhbGluZ1xuICAgICAgLm5pY2UoKSAvLyBhZGRzIHJlbWFpbmluZyB0b3AgdGljayBpZiBsZWZ0IG91dFxuXG4gICAgLy8gbGFiZWwgb24gbGVmdFxuICAgIGZ1bmN0aW9uIHlBeGlzKGcpIHtcbiAgICAgIGcuY2FsbChkMy5heGlzTGVmdCh5KSkgLy8udGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE1cHhcIilcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlUZXh0XCIpXG4gICAgfVxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoeUF4aXMpXG5cbiAgICAvLyB0b29sdGlwIGFib3ZlIGJhclxuICAgIGNvbnN0IHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImQzLXRpcCByYW1lblwiKVxuXG4gICAgLy8gY3JlYXRlcyB0aGUgYmFyc1xuICAgIGNvbnN0IGJhcnMgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpIC8vIGFkZHMgZ3JvdXAgZWxlIHRvIHN2ZyBlbGVcblxuICAgICAgLnNlbGVjdEFsbChcInJlY3RcIikgLy8gc2VsZWN0cyBhbGwgcmVjdGFuZ2xlcywgaWYgbm9uZSBmb3VuZCwgY3JlYXRlcyBlbXB0eSBzZWxlY3Rpb25cbiAgICAgIC5kYXRhKGRhdGEpIC8vLnNvcnQoKGEsIGIpID0+IGQzLmRlc2NlbmRpbmcoYS5jYWxvcmllcywgYi5jYWxvcmllcykpKVxuICAgICAgLmpvaW4oXCJyZWN0XCIpIC8vIHNpbWlsYXIgdG8gLmpvaW4oKGVudGVyKSA9PiBlbnRlci5hcHBlbmQoJ3JlY3QnKSlcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXIgcmFtZW5cIikgLy8gYWRkcyBjbGFzc25hbWUsIG5vdyBjYW4gYmUgbW9kaWZpZWQgaW4gc2Nzc1xuICAgICAgLmF0dHIoXCJ4XCIsIChkKSA9PiB4KGQudHlwZSkpIC8vLCBpKSA9PiB4KGkpKSAvLyBwbGFjZXMgZWxlbWVudHMgaW4gb3JkZXIgb24geCBheGlzLCBkPWRhdGEsIGk9aW5kZXhcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSkgLy8gY2FsY3MgdGhpY2tuZXNzIG9mIGJhcnNcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geSgwKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiAwKVxuXG4gICAgc3ZnXG4gICAgICAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDgwMClcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geShkLmNhbG9yaWVzKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB5KDApIC0geShkLmNhbG9yaWVzKSlcbiAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gaSAqIDEwMFxuICAgICAgfSlcblxuICAgIHN2Z1xuICAgICAgLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZSwgZCkgPT4ge1xuICAgICAgICAvLyBlID09IG1vdXNlIGV2ZW50XG4gICAgICAgIHRpcC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMzAwKS5zdHlsZShcIm9wYWNpdHlcIiwgMC44KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkKVxuICAgICAgICB0aXBcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGBCcmFuZDogJHtkLmJyYW5kfSA8YnIvPlxuICAgICAgICAgICBUb3RhbCBmYXQoZyk6ICR7ZC50b3RhbEZhdH0gPGJyLz5cbiAgICAgICAgICAgU2F0dXJhdGVkIGZhdChnKTogJHtkLnNGYXR9IDxici8+XG4gICAgICAgICAgIFRyYW5zIGZhdChnKTogJHtkLnRGYXR9IDxici8+XG4gICAgICAgICAgIENob2xlc3Rlcm9sIChtZyk6ICR7ZC5jaG9sZXN0ZXJvbH0gPGJyLz5cbiAgICAgICAgICAgU29kaXVtIChtZyk6ICR7ZC5zb2RpdW19IDxici8+XG4gICAgICAgICAgIERpZXRhcnkgRmliZXIgKGcpOiAke2QuZmliZXJ9IDxici8+XG4gICAgICAgICAgIFN1Z2FyIChnKTogJHtkLnN1Z2Fyc30gPGJyLz5cbiAgICAgICAgICAgUHJvdGVpbiAoZyk6ICR7ZC5wcm90ZWlufSA8YnIvPlxuICAgICAgICAgYCxcbiAgICAgICAgICApXG4gICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBgJHtlLmNsaWVudFh9cHhgKVxuICAgICAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtlLmNsaWVudFl9cHhgKVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCAoZSwgZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkKVxuICAgICAgICB0aXAuc3R5bGUoXCJsZWZ0XCIsIGAke2UuY2xpZW50WH1weGApLnN0eWxlKFwidG9wXCIsIGAke2UuY2xpZW50WSAtIDUwfXB4YClcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZSwgZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkKVxuICAgICAgICB0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMCkuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICB9KVxuICAgICAgLy8gdXNlZCBmb3IgdGVzdGluZ1xuICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCAoZCwgaSkgPT4gZC50eXBlKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQpID0+IGNvbnNvbGUubG9nKGQudG9FbGVtZW50Ll9fZGF0YV9fLnR5cGUpKVxuXG4gICAgLy8gQ2Fsb3JpZXMgbGFiZWwgb24gbGVmdCBzaWRlXG4gICAgc3ZnXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsIHJhbWVuWVwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIC1oZWlnaHQgLyAyICsgNDApXG4gICAgICAuYXR0cihcInlcIiwgLXdpZHRoICogMC4xKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJDYWxvcmllc1wiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyNXB4XCIpXG5cbiAgICBkMy5zZWxlY3QoXCJpbnB1dFwiKS5vbihcImNoYW5nZVwiLCBzb3J0KVxuXG4gICAgLy8gY29uc3Qgc29ydFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gICBkMy5zZWxlY3QoXCJpbnB1dFwiKS5wcm9wZXJ0eShcImNoZWNrZWRcIiwgdHJ1ZSkuZWFjaChzb3J0KVxuICAgIC8vIH0sIDUwMClcblxuICAgIGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgICAvLyBjbGVhclRpbWVvdXQoc29ydFRpbWVvdXQpXG5cbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBjb25zdCBuZXdYID0geFxuICAgICAgICAuZG9tYWluKFxuICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIC5zb3J0KFxuICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRcbiAgICAgICAgICAgICAgICA/IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmNhbG9yaWVzIC0gYS5jYWxvcmllc1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmFzY2VuZGluZyhhLnR5cGUsIGIudHlwZSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkLnR5cGVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb3B5KClcblxuICAgICAgc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBkMy5kZXNjZW5kaW5nKGEuY2Fsb3JpZXMsIGIuY2Fsb3JpZXMpKVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLFxuICAgICAgICBkZWxheSA9IChkLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkgKiAyNVxuICAgICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAuYXR0cihcInhcIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3WChkLnR5cGUpXG4gICAgICAgIH0pXG5cbiAgICAgIHRyYW5zaXRpb24uc2VsZWN0KFwiLnhUZXh0XCIpLmNhbGwoeEF4aXMpLnNlbGVjdEFsbChcImdcIikuZGVsYXkoZGVsYXkpXG4gICAgfVxuXG4gICAgc3ZnLm5vZGUoKVxuICB9XG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
