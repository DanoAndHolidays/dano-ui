import { createElementBlock as r, openBlock as d, createElementVNode as l, normalizeStyle as a, toDisplayString as o, renderSlot as u, createTextVNode as e } from "vue";
/* empty css              */
import m from "../../_virtual/_plugin-vue_export-helper.js";
const p = { class: "container" }, f = { class: "bend-card" }, g = { class: "font" }, b = { class: "title" }, y = { class: "small" }, v = { class: "content" }, _ = /* @__PURE__ */ Object.assign({
  name: "BendCard"
}, {
  __name: "BendCard",
  props: {
    img: {
      type: String,
      required: !1,
      default: "https://cdn.pixabay.com/photo/2015/11/05/18/56/lemon-1024641_1280.jpg"
    },
    title: {
      type: String,
      required: !1,
      default: "Vue卡片组件"
    },
    small: {
      type: String,
      required: !1,
      default: "5 hours ago"
    }
  },
  setup(i) {
    const s = i;
    return (n, t) => (d(), r("div", p, [
      l("div", f, [
        l("div", {
          class: "img",
          style: a(`background-image: url(${s.img})`)
        }, null, 4),
        t[8] || (t[8] = l("div", { class: "text" }, null, -1)),
        l("div", g, [
          l("div", b, o(s.title), 1),
          l("div", y, o(s.small), 1),
          l("div", v, [
            u(n.$slots, "default", {}, () => [
              t[0] || (t[0] = e(" 你好，我是Dano 👋", -1)),
              t[1] || (t[1] = l("br", null, null, -1)),
              t[2] || (t[2] = e("一位热爱前端的学习者", -1)),
              t[3] || (t[3] = l("br", null, null, -1)),
              t[4] || (t[4] = l("br", null, null, -1)),
              t[5] || (t[5] = l("a", {
                href: "https://github.com/DanoAndHolidays",
                target: "_blank",
                style: { color: "#e5c826" }
              }, "GitHub主页", -1)),
              t[6] || (t[6] = e("  ", -1)),
              t[7] || (t[7] = l("a", {
                href: "https://space.bilibili.com/111616585?spm_id_from=333.1007.0.0",
                target: "_blank",
                style: { color: "#e5c826" }
              }, "Bilibili主页", -1))
            ], !0)
          ])
        ])
      ])
    ]));
  }
}), k = /* @__PURE__ */ m(_, [["__scopeId", "data-v-19047479"]]);
export {
  k as default
};
