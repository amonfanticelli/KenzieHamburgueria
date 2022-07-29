import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --color-green-primary: rgba(39, 174, 96, 1);
  --color-light-green-primary: rgba(147, 215, 175, 1);
  --color-red-secondary:rgba(235, 87, 87, 1);

  

  --color-dark-gray:rgba(51, 51, 51, 1);
  --color-medium-gray: rgba(130, 130, 130, 1);
  --color-light-gray:rgba(224, 224, 224, 1);

  --color-white: rgba(245, 245, 245, 1);

  --font-inter:'Inter', sans-serif;
  
  /* var(--color-blue) */
  /* var(--font-bangers) */

}

*,
*::after,
*::before {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button,
select,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

a {
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: var(--font-inter);
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0
}

`;
