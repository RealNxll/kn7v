import {
	b as a,
	a as o
} from "./Desktop-f90aaaa2.js";
import {
	p as r
} from "./data-8cc8e5e4.js";
import {
	o as e,
	t as i,
	l as s,
	k as c,
	h as d
} from "./index-91f402d1.js";
import {
	k as f,
	l as m
} from "./BatteryHelper-dade8b43.js";

function u(t) {
	return e("div", {
		class: "flex flex-col bg-slate-800 rounded-md items-center border-transparent w-96",
		children: [e("button", {
			class: "w-full rounded-md relative hover:scale-105 transition",
			onClick: () => t.setViewProject(t.project),
			children: [e("div", {
				class: "absolute top-0 h-full w-full opacity-0 transition hover:opacity-100 hover:backdrop-blur-sm hover:bg-white/5 rounded-md flex flex-col items-center justify-center gap-2",
				children: e("p", {
					class: "text-xl",
					children: i("app.myprojects.content.learnmore")
				})
			}), e("img", {
				src: t.project.image,
				alt: `${t.project.title} image`,
				loading: "lazy",
				class: "rounded-md"
			})]
		}), e("div", {
			class: "p-2 text-center",
			children: [e("p", {
				class: "text-xl font-bold",
				children: t.project.title
			}), e("p", {
				class: "text-xs font-light text-gray-400",
				children: s.value == "fr" ? t.project.subtitleFR : t.project.subtitleEN
			}), e("div", {
				class: "flex items-center justify-center flex-wrap mt-2",
				children: t.project.skillsName ? t.project.skillsName.map(l => e("span", {
					class: "text-xs bg-white/10 rounded-md p-1 m-1",
					children: l
				})) : e(c, {})
			})]
		})]
	})
}

function h(t) {
	return e("div", {
		class: "bg-cover bg-center bg-no-repeat h-full w-full",
		style: {
			backgroundImage: `url("${t.project.image}")`
		},
		children: e("div", {
			class: "bg-slate-900/95 h-full w-full md:rounded-b-md",
			children: e("div", {
				class: "over text-white w-full h-full overflow-y-scroll flex flex-col noscrollbar",
				children: [e("div", {
					class: "flex flex-wrap items-center bg-cover p-5 gap-10 bg-center bg-no-repeat justify-between",
					children: [e("button", {
						class: "hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1",
						onClick: () => t.setViewProject(null),
						children: [e(a, {
							path: f,
							size: 1
						}), " ", i("app.myprojects.content.goback")]
					}), e("div", {
						class: "flex flex-col gap-2 items-center w-fit",
						children: [e("h1", {
							class: "text-2xl md:text-4xl text-center font-bold wavy-underline -translate-y-1",
							children: t.project.title
						}), e("div", {
							class: "flex items-center justify-center gap-2",
							children: t.project.skillsName ? t.project.skillsName.map(l => e("span", {
								class: "text-md bg-white/10 rounded-md px-2 py-1 m-1",
								children: l
							})) : e(c, {})
						})]
					}), t.project.link ? e("a", {
						class: "hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1",
						href: t.project.link,
						target: "_blank",
						children: [e(a, {
							path: m,
							size: 1
						}), " ", t.project.link]
					}) : e(c, {})]
				}), e("div", {
					class: "flex flex-col items-center p-5 h-full gap-4",
					children: [e("p", {
						class: "text-md md:text-lg",
						children: s.value == "fr" ? t.project.descriptionFR : t.project.descriptionEN
					}), e("img", {
						src: t.project.image,
						alt: "Screenshot",
						class: "h-max md:h-full rounded-md"
					})]
				})]
			})
		})
	})
}

function v() {
	const [t, l] = d(null);
	return t ? e(h, {
		project: t,
		setViewProject: l
	}) : e("div", {
		class: "bg-slate-900 h-full w-full md:rounded-b-md",
		children: e("div", {
			class: "p-10 gap-10 text-center over text-white w-full h-full overflow-y-scroll flex flex-col pt-5 noscrollbar",
			children: [e(o, {
				animationIn: "fadeInDown",
				animationInDuration: 1e3,
				children: [e("h1", {
					class: "text-4xl font-bold wavy-underline mb-3",
					children: i("app.myprojects.content.title")
				}), e("p", {
					class: "font-light text-gray-400",
					children: i("app.myprojects.content.subtitle")
				})]
			}), e("div", {
				class: "flex flex-row gap-4 flex-wrap justify-center",
				children: r.map(n => e("div", {
					children: e(o, {
						animationIn: "fadeIn",
						animationOut: "fadeOut",
						animationInDuration: 1e3,
						animationOutDuration: 300,
						animationInDelay: r.indexOf(n) * 150,
						animationOutDelay: r.indexOf(n) * 100,
						children: e(u, {
							project: n,
							setViewProject: l
						})
					})
				}, r.indexOf(n)))
			})]
		})
	})
}
export {
	v as
	default
};