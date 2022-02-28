import Link from 'next/link';
import { useEffect, useState } from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <a className="transition-all duration-150 ease-in-out hover:opacity-70">
        <svg
          className="fill-current text-neutral-800 dark:text-neutral-200"
          height="32px"
          viewBox="0 0 194 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.92578 13.3984V15H9.6582V13.3984L8.11523 13.1055V2.82227H10.8496L11.0352 4.58008H13.0469V0.78125H0.546875V4.58008H2.54883L2.73438 2.82227H5.45898V13.1055L3.92578 13.3984ZM22.7148 14.6777C23.4896 15.0293 24.3522 15.2051 25.3027 15.2051C26.2663 15.2051 27.1387 15.0293 27.9199 14.6777C28.7012 14.3197 29.3685 13.8184 29.9219 13.1738C30.4818 12.5228 30.9082 11.7611 31.2012 10.8887C31.5007 10.0098 31.6504 9.04622 31.6504 7.99805V7.7832C31.6504 6.74154 31.5007 5.78451 31.2012 4.91211C30.9082 4.0332 30.4818 3.27148 29.9219 2.62695C29.362 1.97591 28.6914 1.47135 27.9102 1.11328C27.1354 0.755208 26.263 0.576172 25.293 0.576172C24.3424 0.576172 23.4798 0.755208 22.7051 1.11328C21.9368 1.47135 21.2728 1.97591 20.7129 2.62695C20.1595 3.27148 19.7331 4.0332 19.4336 4.91211C19.1341 5.78451 18.9844 6.74154 18.9844 7.7832V7.99805C18.9844 9.04622 19.1341 10.0098 19.4336 10.8887C19.7331 11.7611 20.1595 12.5228 20.7129 13.1738C21.2728 13.8184 21.9401 14.3197 22.7148 14.6777ZM27.373 12.4805C26.8262 12.9036 26.1361 13.1152 25.3027 13.1152C24.4954 13.1152 23.8184 12.9036 23.2715 12.4805C22.7311 12.0508 22.3242 11.4518 22.0508 10.6836C21.7839 9.90885 21.6504 9.01367 21.6504 7.99805V7.76367C21.6504 6.74805 21.7839 5.85938 22.0508 5.09766C22.3242 4.33594 22.7311 3.74349 23.2715 3.32031C23.8118 2.89062 24.4857 2.67578 25.293 2.67578C26.1198 2.67578 26.8066 2.89062 27.3535 3.32031C27.9069 3.75 28.3203 4.3457 28.5938 5.10742C28.8672 5.86914 29.0039 6.75456 29.0039 7.76367V7.99805C29.0039 9.02018 28.8672 9.91536 28.5938 10.6836C28.3268 11.4518 27.9199 12.0508 27.373 12.4805ZM41.9336 14.6777C42.7083 15.0293 43.571 15.2051 44.5215 15.2051C45.485 15.2051 46.3574 15.0293 47.1387 14.6777C47.9199 14.3197 48.5872 13.8184 49.1406 13.1738C49.7005 12.5228 50.127 11.7611 50.4199 10.8887C50.7194 10.0098 50.8691 9.04622 50.8691 7.99805V7.7832C50.8691 6.74154 50.7194 5.78451 50.4199 4.91211C50.127 4.0332 49.7005 3.27148 49.1406 2.62695C48.5807 1.97591 47.9102 1.47135 47.1289 1.11328C46.3542 0.755208 45.4818 0.576172 44.5117 0.576172C43.5612 0.576172 42.6986 0.755208 41.9238 1.11328C41.1556 1.47135 40.4915 1.97591 39.9316 2.62695C39.3783 3.27148 38.9518 4.0332 38.6523 4.91211C38.3529 5.78451 38.2031 6.74154 38.2031 7.7832V7.99805C38.2031 9.04622 38.3529 10.0098 38.6523 10.8887C38.9518 11.7611 39.3783 12.5228 39.9316 13.1738C40.4915 13.8184 41.1589 14.3197 41.9336 14.6777ZM46.5918 12.4805C46.0449 12.9036 45.3548 13.1152 44.5215 13.1152C43.7142 13.1152 43.0371 12.9036 42.4902 12.4805C41.9499 12.0508 41.543 11.4518 41.2695 10.6836C41.0026 9.90885 40.8691 9.01367 40.8691 7.99805V7.76367C40.8691 6.74805 41.0026 5.85938 41.2695 5.09766C41.543 4.33594 41.9499 3.74349 42.4902 3.32031C43.0306 2.89062 43.7044 2.67578 44.5117 2.67578C45.3385 2.67578 46.0254 2.89062 46.5723 3.32031C47.1257 3.75 47.5391 4.3457 47.8125 5.10742C48.0859 5.86914 48.2227 6.75456 48.2227 7.76367V7.99805C48.2227 9.02018 48.0859 9.91536 47.8125 10.6836C47.5456 11.4518 47.1387 12.0508 46.5918 12.4805ZM57.0898 13.3984V15H62.8125V13.3984L61.0059 13.1055V4.96094L61.0645 4.95117L67.5586 15H70.1074V2.68555L71.6406 2.39258V0.78125H70.1074H65.918V2.39258L67.7246 2.68555V10.8887L67.666 10.8984L61.3086 0.78125H58.6133H57.0898V2.39258L58.6133 2.68555V13.1055L57.0898 13.3984ZM87.6465 13.3984V15H93.3691V13.3984L91.8359 13.1055V9.72656H94.3652C95.4395 9.72656 96.3607 9.54102 97.1289 9.16992C97.9036 8.79883 98.4994 8.28125 98.916 7.61719C99.3327 6.94661 99.541 6.16211 99.541 5.26367C99.541 4.37174 99.3327 3.59049 98.916 2.91992C98.4994 2.24284 97.9036 1.71875 97.1289 1.34766C96.3607 0.970052 95.4395 0.78125 94.3652 0.78125H89.1797H87.6465V2.39258L89.1797 2.68555V13.1055L87.6465 13.3984ZM94.3652 7.67578H91.8359V2.83203H94.3652C95.1986 2.83203 95.8268 3.06641 96.25 3.53516C96.6732 3.9974 96.8848 4.58008 96.8848 5.2832C96.8848 5.97982 96.6732 6.55273 96.25 7.00195C95.8268 7.45117 95.1986 7.67578 94.3652 7.67578ZM105.537 13.3984V15H116.699V11.2207H114.668L114.521 12.9688H109.727V8.68164H114.629V6.62109H109.727V2.82227H114.268L114.414 4.53125H116.465V0.78125H105.537V2.39258L107.07 2.68555V13.1055L105.537 13.3984ZM123.311 13.3984V15H129.033V13.3984L127.5 13.1055V9.22852L130.18 9.21915L132.51 15H135.742V13.3789L134.58 13.125L132.653 8.74701C132.707 8.72289 132.76 8.69784 132.812 8.67188C133.542 8.30729 134.108 7.80599 134.512 7.16797C134.915 6.52995 135.117 5.79427 135.117 4.96094C135.117 4.08854 134.912 3.33984 134.502 2.71484C134.098 2.08984 133.509 1.61133 132.734 1.2793C131.966 0.947266 131.045 0.78125 129.971 0.78125H123.311V2.39258L124.844 2.68555V13.1055L123.311 13.3984ZM129.883 7.17773H127.5V2.83203H129.971C130.804 2.83203 131.429 3.03385 131.846 3.4375C132.262 3.84115 132.471 4.38151 132.471 5.05859C132.471 5.7487 132.259 6.27604 131.836 6.64062C131.413 6.9987 130.762 7.17773 129.883 7.17773ZM144.893 14.8535C145.745 15.0879 146.676 15.2051 147.686 15.2051C148.727 15.2051 149.635 15.0456 150.41 14.7266C151.191 14.401 151.797 13.9453 152.227 13.3594C152.663 12.7669 152.881 12.0736 152.881 11.2793C152.881 10.1335 152.477 9.20247 151.67 8.48633C150.869 7.76367 149.691 7.19076 148.135 6.76758C147.399 6.53971 146.816 6.31836 146.387 6.10352C145.957 5.88867 145.651 5.6543 145.469 5.40039C145.286 5.14648 145.195 4.85026 145.195 4.51172C145.195 4.12109 145.299 3.78581 145.508 3.50586C145.716 3.22591 146.003 3.01432 146.367 2.87109C146.732 2.72135 147.152 2.64648 147.627 2.64648C148.18 2.64648 148.669 2.70833 149.092 2.83203C149.515 2.95573 149.857 3.10547 150.117 3.28125L150.479 5.24414H152.48V2.11914C151.895 1.64388 151.188 1.26628 150.361 0.986328C149.535 0.70638 148.581 0.572917 147.5 0.585938C146.53 0.592448 145.671 0.764974 144.922 1.10352C144.18 1.44206 143.597 1.90755 143.174 2.5C142.757 3.08594 142.549 3.75977 142.549 4.52148C142.549 5.2832 142.728 5.94076 143.086 6.49414C143.451 7.04102 143.997 7.50977 144.727 7.90039C145.456 8.29102 146.367 8.63932 147.461 8.94531C148.145 9.14714 148.685 9.36198 149.082 9.58984C149.486 9.8112 149.775 10.0618 149.951 10.3418C150.127 10.6152 150.215 10.9342 150.215 11.2988C150.215 11.6764 150.117 12.0085 149.922 12.2949C149.727 12.5749 149.44 12.793 149.062 12.9492C148.691 13.099 148.232 13.1738 147.686 13.1738C147.087 13.1738 146.53 13.099 146.016 12.9492C145.508 12.7995 145.094 12.6009 144.775 12.3535L144.463 10.2832H142.412V13.6426C143.219 14.209 144.046 14.6126 144.893 14.8535ZM162.969 13.3984V15H168.691V13.3984L167.148 13.1055V9.85352L171.338 2.58789L172.705 2.39258V0.78125H167.305V2.39258L168.887 2.56836L166.152 7.34375L165.938 7.76367L165.889 7.77344L165.674 7.33398L163.174 2.56836L164.434 2.39258V0.78125H158.926V2.39258L160.254 2.58789L164.502 10.0586V13.1055L162.969 13.3984ZM178.75 13.3984V15H184.473V13.3984L182.666 13.1055V4.96094L182.725 4.95117L189.219 15H191.768V2.68555L193.301 2.39258V0.78125H191.768H187.578V2.39258L189.385 2.68555V10.8887L189.326 10.8984L182.969 0.78125H180.273H178.75V2.39258L180.273 2.68555V13.1055L178.75 13.3984ZM0.474609 32.2617V33H3.87305C4.62695 33 5.2793 32.8184 5.83008 32.4551C6.38477 32.0879 6.8125 31.5898 7.11328 30.9609C7.41406 30.3281 7.56445 29.6172 7.56445 28.8281V28.6465C7.56445 27.8379 7.4082 27.1191 7.0957 26.4902C6.7832 25.8613 6.3457 25.3672 5.7832 25.0078C5.22461 24.6484 4.56836 24.4688 3.81445 24.4688H1.42969H0.474609V25.2129L1.42969 25.377V32.0977L0.474609 32.2617ZM3.81445 32.0977H2.58398V25.377H3.81445C4.35352 25.377 4.81641 25.5195 5.20312 25.8047C5.58984 26.0898 5.88672 26.4785 6.09375 26.9707C6.30469 27.459 6.41016 28.0137 6.41016 28.6348V28.8281C6.41016 29.4297 6.30469 29.9785 6.09375 30.4746C5.88672 30.9668 5.58984 31.3613 5.20312 31.6582C4.81641 31.9512 4.35352 32.0977 3.81445 32.0977ZM9.41992 32.2617V33H12.4844V32.2617L11.5293 32.0977V25.377L12.4844 25.2129V24.4688H9.41992V25.2129L10.375 25.377V32.0977L9.41992 32.2617ZM14.4395 32.2617V33H17.5039V32.2617L16.5488 32.0977V29.1914L18.3581 29.1581L20.0703 33H21.4941V32.2441L20.9023 32.1387L19.4626 29.0237C19.6086 28.9846 19.7468 28.937 19.877 28.8809C20.2754 28.7051 20.582 28.4473 20.7969 28.1074C21.0156 27.7676 21.125 27.3477 21.125 26.8477C21.125 26.3398 21.0137 25.9102 20.791 25.5586C20.5684 25.207 20.2422 24.9395 19.8125 24.7559C19.3867 24.5684 18.8633 24.4746 18.2422 24.4746H14.4395V25.2129L15.3945 25.377V32.0977L14.4395 32.2617ZM18.125 28.2832H16.5488V25.377H18.2422C18.832 25.377 19.2676 25.5078 19.5488 25.7695C19.8301 26.0312 19.9707 26.3867 19.9707 26.8359C19.9707 27.3086 19.8242 27.668 19.5312 27.9141C19.2383 28.1602 18.7695 28.2832 18.125 28.2832ZM23.5605 32.2617V33H30.0586V30.9551H29.1387L29.0098 32.1328H25.6699V29.0449H28.8164V28.1367H25.6699V25.3594H28.8223L28.9512 26.5195H29.877V24.4688H23.5605V25.2129L24.5156 25.377V32.0977L23.5605 32.2617ZM33.9238 32.5605C34.498 32.9355 35.2129 33.123 36.0684 33.123C36.541 33.123 37 33.0684 37.4453 32.959C37.8906 32.8457 38.2734 32.6895 38.5938 32.4902V30.6387H37.6914L37.5625 31.8281C37.3906 31.9336 37.1738 32.0195 36.9121 32.0859C36.6504 32.1523 36.3828 32.1855 36.1094 32.1855C35.5234 32.1855 35.0254 32.0527 34.6152 31.7871C34.209 31.5215 33.8984 31.1367 33.6836 30.6328C33.4727 30.125 33.3672 29.5137 33.3672 28.7988V28.6641C33.3672 28.0039 33.4668 27.4219 33.666 26.918C33.8652 26.4141 34.1582 26.0195 34.5449 25.7344C34.9316 25.4453 35.4043 25.3008 35.9629 25.3008C36.1934 25.3008 36.4062 25.3184 36.6016 25.3535C36.8008 25.3887 36.9805 25.4395 37.1406 25.5059C37.3047 25.5723 37.4492 25.6543 37.5742 25.752L37.6973 27.0996H38.6172V25.2598C38.3164 24.9941 37.9375 24.7754 37.4805 24.6035C37.0234 24.4316 36.5195 24.3457 35.9688 24.3457C35.1875 24.3457 34.5156 24.5332 33.9531 24.9082C33.3906 25.2832 32.959 25.7969 32.6582 26.4492C32.3574 27.0977 32.207 27.8398 32.207 28.6758V28.7988C32.207 29.627 32.3496 30.3672 32.6348 31.0195C32.9238 31.6719 33.3535 32.1855 33.9238 32.5605ZM42.6992 32.2617V33H45.7637V32.2617L44.8086 32.0977V25.3418H46.7422L46.918 26.5254H47.7734V24.4688H40.6836V26.5254H41.5508L41.7207 25.3418H43.6543V32.0977L42.6992 32.2617ZM51.668 32.8066C52.1055 33.0176 52.5996 33.123 53.1504 33.123C53.7324 33.123 54.2441 33.0176 54.6855 32.8066C55.127 32.5957 55.4961 32.2988 55.793 31.916C56.0938 31.5293 56.3203 31.0723 56.4727 30.5449C56.625 30.0176 56.7012 29.4355 56.7012 28.7988V28.6758C56.7012 28.043 56.625 27.4629 56.4727 26.9355C56.3203 26.4043 56.0938 25.9453 55.793 25.5586C55.4961 25.1719 55.127 24.873 54.6855 24.6621C54.2441 24.4512 53.7324 24.3457 53.1504 24.3457C52.5996 24.3457 52.1055 24.4512 51.668 24.6621C51.2305 24.873 50.8574 25.1719 50.5488 25.5586C50.2441 25.9453 50.0098 26.4043 49.8457 26.9355C49.6855 27.4629 49.6055 28.043 49.6055 28.6758V28.7988C49.6055 29.4355 49.6855 30.0176 49.8457 30.5449C50.0098 31.0723 50.2441 31.5293 50.5488 31.916C50.8574 32.2988 51.2305 32.5957 51.668 32.8066ZM54.5215 31.7402C54.1738 32.0215 53.7168 32.1621 53.1504 32.1621C52.6387 32.1621 52.2051 32.0215 51.8496 31.7402C51.4941 31.4551 51.2246 31.0605 51.041 30.5566C50.8574 30.0488 50.7656 29.4629 50.7656 28.7988V28.6641C50.7656 28.0039 50.8574 27.4238 51.041 26.9238C51.2246 26.4199 51.4941 26.0254 51.8496 25.7402C52.2051 25.4551 52.6387 25.3125 53.1504 25.3125C53.709 25.3125 54.1641 25.4551 54.5156 25.7402C54.8672 26.0215 55.125 26.4141 55.2891 26.918C55.457 27.418 55.541 28 55.541 28.6641V28.7988C55.541 29.4668 55.459 30.0547 55.2949 30.5625C55.1309 31.0664 54.873 31.459 54.5215 31.7402ZM58.5918 32.2617V33H61.6562V32.2617L60.7012 32.0977V29.1914L62.5105 29.1581L64.2227 33H65.6465V32.2441L65.0547 32.1387L63.6149 29.0237C63.761 28.9846 63.8991 28.937 64.0293 28.8809C64.4277 28.7051 64.7344 28.4473 64.9492 28.1074C65.168 27.7676 65.2773 27.3477 65.2773 26.8477C65.2773 26.3398 65.166 25.9102 64.9434 25.5586C64.7207 25.207 64.3945 24.9395 63.9648 24.7559C63.5391 24.5684 63.0156 24.4746 62.3945 24.4746H58.5918V25.2129L59.5469 25.377V32.0977L58.5918 32.2617ZM62.2773 28.2832H60.7012V25.377H62.3945C62.9844 25.377 63.4199 25.5078 63.7012 25.7695C63.9824 26.0312 64.123 26.3867 64.123 26.8359C64.123 27.3086 63.9766 27.668 63.6836 27.9141C63.3906 28.1602 62.9219 28.2832 62.2773 28.2832ZM73.6992 32.8066C74.1367 33.0176 74.6309 33.123 75.1816 33.123C75.7637 33.123 76.2754 33.0176 76.7168 32.8066C77.1582 32.5957 77.5273 32.2988 77.8242 31.916C78.125 31.5293 78.3516 31.0723 78.5039 30.5449C78.6562 30.0176 78.7324 29.4355 78.7324 28.7988V28.6758C78.7324 28.043 78.6562 27.4629 78.5039 26.9355C78.3516 26.4043 78.125 25.9453 77.8242 25.5586C77.5273 25.1719 77.1582 24.873 76.7168 24.6621C76.2754 24.4512 75.7637 24.3457 75.1816 24.3457C74.6309 24.3457 74.1367 24.4512 73.6992 24.6621C73.2617 24.873 72.8887 25.1719 72.5801 25.5586C72.2754 25.9453 72.041 26.4043 71.877 26.9355C71.7168 27.4629 71.6367 28.043 71.6367 28.6758V28.7988C71.6367 29.4355 71.7168 30.0176 71.877 30.5449C72.041 31.0723 72.2754 31.5293 72.5801 31.916C72.8887 32.2988 73.2617 32.5957 73.6992 32.8066ZM76.5527 31.7402C76.2051 32.0215 75.748 32.1621 75.1816 32.1621C74.6699 32.1621 74.2363 32.0215 73.8809 31.7402C73.5254 31.4551 73.2559 31.0605 73.0723 30.5566C72.8887 30.0488 72.7969 29.4629 72.7969 28.7988V28.6641C72.7969 28.0039 72.8887 27.4238 73.0723 26.9238C73.2559 26.4199 73.5254 26.0254 73.8809 25.7402C74.2363 25.4551 74.6699 25.3125 75.1816 25.3125C75.7402 25.3125 76.1953 25.4551 76.5469 25.7402C76.8984 26.0215 77.1562 26.4141 77.3203 26.918C77.4883 27.418 77.5723 28 77.5723 28.6641V28.7988C77.5723 29.4668 77.4902 30.0547 77.3262 30.5625C77.1621 31.0664 76.9043 31.459 76.5527 31.7402ZM80.623 32.2617V33H83.6875V32.2617L82.7324 32.0977V29.2266H85.8555V28.3184H82.7324V25.3652H85.9844L86.1133 26.5195H87.0391V24.4688H80.623V25.2129L81.5781 25.377V32.0977L80.623 32.2617ZM92.9707 32.2617V33H96.0352V32.2617L95.0801 32.0977V29.5781H96.8906C97.5 29.5781 98.0195 29.4727 98.4492 29.2617C98.8789 29.0508 99.207 28.7539 99.4336 28.3711C99.6602 27.9883 99.7734 27.5391 99.7734 27.0234C99.7734 26.5117 99.6602 26.0645 99.4336 25.6816C99.207 25.2988 98.8789 25.002 98.4492 24.791C98.0195 24.5762 97.5 24.4688 96.8906 24.4688H93.9258H92.9707V25.2129L93.9258 25.377V32.0977L92.9707 32.2617ZM96.8906 28.6758H95.0801V25.377H96.8906C97.4688 25.377 97.9004 25.5352 98.1855 25.8516C98.4746 26.168 98.6191 26.5625 98.6191 27.0352C98.6191 27.5078 98.4746 27.9004 98.1855 28.2129C97.9004 28.5215 97.4688 28.6758 96.8906 28.6758ZM101.576 32.2617V33H104.641V32.2617L103.686 32.0977V29.2324H107.764V32.0977L106.809 32.2617V33H109.873V32.2617L108.918 32.0977V25.377L109.873 25.2129V24.4688H108.918H107.764H106.809V25.2129L107.764 25.377V28.3242H103.686V25.377L104.641 25.2129V24.4688H101.576V25.2129L102.531 25.377V32.0977L101.576 32.2617ZM113.82 32.8066C114.258 33.0176 114.752 33.123 115.303 33.123C115.885 33.123 116.396 33.0176 116.838 32.8066C117.279 32.5957 117.648 32.2988 117.945 31.916C118.246 31.5293 118.473 31.0723 118.625 30.5449C118.777 30.0176 118.854 29.4355 118.854 28.7988V28.6758C118.854 28.043 118.777 27.4629 118.625 26.9355C118.473 26.4043 118.246 25.9453 117.945 25.5586C117.648 25.1719 117.279 24.873 116.838 24.6621C116.396 24.4512 115.885 24.3457 115.303 24.3457C114.752 24.3457 114.258 24.4512 113.82 24.6621C113.383 24.873 113.01 25.1719 112.701 25.5586C112.396 25.9453 112.162 26.4043 111.998 26.9355C111.838 27.4629 111.758 28.043 111.758 28.6758V28.7988C111.758 29.4355 111.838 30.0176 111.998 30.5449C112.162 31.0723 112.396 31.5293 112.701 31.916C113.01 32.2988 113.383 32.5957 113.82 32.8066ZM116.674 31.7402C116.326 32.0215 115.869 32.1621 115.303 32.1621C114.791 32.1621 114.357 32.0215 114.002 31.7402C113.646 31.4551 113.377 31.0605 113.193 30.5566C113.01 30.0488 112.918 29.4629 112.918 28.7988V28.6641C112.918 28.0039 113.01 27.4238 113.193 26.9238C113.377 26.4199 113.646 26.0254 114.002 25.7402C114.357 25.4551 114.791 25.3125 115.303 25.3125C115.861 25.3125 116.316 25.4551 116.668 25.7402C117.02 26.0215 117.277 26.4141 117.441 26.918C117.609 27.418 117.693 28 117.693 28.6641V28.7988C117.693 29.4668 117.611 30.0547 117.447 30.5625C117.283 31.0664 117.025 31.459 116.674 31.7402ZM122.684 32.2617V33H125.748V32.2617L124.793 32.0977V25.3418H126.727L126.902 26.5254H127.758V24.4688H120.668V26.5254H121.535L121.705 25.3418H123.639V32.0977L122.684 32.2617ZM131.652 32.8066C132.09 33.0176 132.584 33.123 133.135 33.123C133.717 33.123 134.229 33.0176 134.67 32.8066C135.111 32.5957 135.48 32.2988 135.777 31.916C136.078 31.5293 136.305 31.0723 136.457 30.5449C136.609 30.0176 136.686 29.4355 136.686 28.7988V28.6758C136.686 28.043 136.609 27.4629 136.457 26.9355C136.305 26.4043 136.078 25.9453 135.777 25.5586C135.48 25.1719 135.111 24.873 134.67 24.6621C134.229 24.4512 133.717 24.3457 133.135 24.3457C132.584 24.3457 132.09 24.4512 131.652 24.6621C131.215 24.873 130.842 25.1719 130.533 25.5586C130.229 25.9453 129.994 26.4043 129.83 26.9355C129.67 27.4629 129.59 28.043 129.59 28.6758V28.7988C129.59 29.4355 129.67 30.0176 129.83 30.5449C129.994 31.0723 130.229 31.5293 130.533 31.916C130.842 32.2988 131.215 32.5957 131.652 32.8066ZM134.506 31.7402C134.158 32.0215 133.701 32.1621 133.135 32.1621C132.623 32.1621 132.189 32.0215 131.834 31.7402C131.479 31.4551 131.209 31.0605 131.025 30.5566C130.842 30.0488 130.75 29.4629 130.75 28.7988V28.6641C130.75 28.0039 130.842 27.4238 131.025 26.9238C131.209 26.4199 131.479 26.0254 131.834 25.7402C132.189 25.4551 132.623 25.3125 133.135 25.3125C133.693 25.3125 134.148 25.4551 134.5 25.7402C134.852 26.0215 135.109 26.4141 135.273 26.918C135.441 27.418 135.525 28 135.525 28.6641V28.7988C135.525 29.4668 135.443 30.0547 135.279 30.5625C135.115 31.0664 134.857 31.459 134.506 31.7402ZM140.703 32.5781C141.281 32.9414 141.965 33.123 142.754 33.123C143.496 33.123 144.096 33.0273 144.553 32.8359C145.014 32.6445 145.367 32.4336 145.613 32.2031V28.8984H142.824V29.748L144.459 29.8066V31.8105C144.252 31.9199 144.014 32.0098 143.744 32.0801C143.475 32.1465 143.145 32.1797 142.754 32.1797C142.18 32.1797 141.691 32.041 141.289 31.7637C140.887 31.4824 140.58 31.0898 140.369 30.5859C140.162 30.0781 140.059 29.4844 140.059 28.8047V28.6523C140.059 27.9805 140.172 27.3945 140.398 26.8945C140.625 26.3906 140.934 25.998 141.324 25.7168C141.715 25.4355 142.154 25.2949 142.643 25.2949C143.021 25.2949 143.35 25.3281 143.627 25.3945C143.904 25.457 144.139 25.5508 144.33 25.6758L144.453 26.9121H145.402V25.1895C145.074 24.9316 144.678 24.7266 144.213 24.5742C143.752 24.4219 143.189 24.3457 142.525 24.3457C141.83 24.3457 141.209 24.5273 140.662 24.8906C140.115 25.2539 139.684 25.7598 139.367 26.4082C139.055 27.0527 138.898 27.8047 138.898 28.6641V28.8047C138.898 29.6562 139.055 30.4062 139.367 31.0547C139.68 31.7031 140.125 32.2109 140.703 32.5781ZM147.791 32.2617V33H150.855V32.2617L149.9 32.0977V29.1914L151.71 29.1581L153.422 33H154.846V32.2441L154.254 32.1387L152.814 29.0237C152.96 28.9846 153.098 28.937 153.229 28.8809C153.627 28.7051 153.934 28.4473 154.148 28.1074C154.367 27.7676 154.477 27.3477 154.477 26.8477C154.477 26.3398 154.365 25.9102 154.143 25.5586C153.92 25.207 153.594 24.9395 153.164 24.7559C152.738 24.5684 152.215 24.4746 151.594 24.4746H147.791V25.2129L148.746 25.377V32.0977L147.791 32.2617ZM151.477 28.2832H149.9V25.377H151.594C152.184 25.377 152.619 25.5078 152.9 25.7695C153.182 26.0312 153.322 26.3867 153.322 26.8359C153.322 27.3086 153.176 27.668 152.883 27.9141C152.59 28.1602 152.121 28.2832 151.477 28.2832ZM156.848 32.2617V33H159.291V32.2617L158.646 32.1504L159.227 30.5801H162.643L163.205 32.1504L162.561 32.2617V33H165.01V32.2617L164.383 32.1738L161.453 24.4688H160.463L157.48 32.1738L156.848 32.2617ZM162.291 29.6133H159.584L160.861 26.1445L160.932 25.9512H160.967L161.037 26.1445L162.291 29.6133ZM166.9 32.2617V33H169.965V32.2617L169.01 32.0977V29.5781H170.82C171.43 29.5781 171.949 29.4727 172.379 29.2617C172.809 29.0508 173.137 28.7539 173.363 28.3711C173.59 27.9883 173.703 27.5391 173.703 27.0234C173.703 26.5117 173.59 26.0645 173.363 25.6816C173.137 25.2988 172.809 25.002 172.379 24.791C171.949 24.5762 171.43 24.4688 170.82 24.4688H167.855H166.9V25.2129L167.855 25.377V32.0977L166.9 32.2617ZM170.82 28.6758H169.01V25.377H170.82C171.398 25.377 171.83 25.5352 172.115 25.8516C172.404 26.168 172.549 26.5625 172.549 27.0352C172.549 27.5078 172.404 27.9004 172.115 28.2129C171.83 28.5215 171.398 28.6758 170.82 28.6758ZM175.506 32.2617V33H178.57V32.2617L177.615 32.0977V29.2324H181.693V32.0977L180.738 32.2617V33H183.803V32.2617L182.848 32.0977V25.377L183.803 25.2129V24.4688H182.848H181.693H180.738V25.2129L181.693 25.377V28.3242H177.615V25.377L178.57 25.2129V24.4688H175.506V25.2129L176.461 25.377V32.0977L175.506 32.2617ZM187.867 32.2617V33H190.926V32.2617L189.971 32.0977V29.8066L192.549 25.3242L193.293 25.2129V24.4688H190.41V25.2129L191.418 25.3242L189.52 28.6758L189.402 28.8926L189.396 28.9043L189.273 28.6758L187.463 25.3242L188.436 25.2129V24.4688H185.494V25.2129L186.197 25.3242L188.822 29.8945V32.0977L187.867 32.2617Z"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
