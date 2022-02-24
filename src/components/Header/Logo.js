import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="transition-all duration-150 ease-in-out hover:opacity-70">
        <svg
          height="32px"
          viewBox="0 0 214 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.125 18V3.25H14.375V0.55H0.625V3.25H5.875V18H9.125ZM24.5402 17.7C25.3736 18.1 26.3569 18.3 27.4902 18.3C29.7569 18.3 31.4236 17.5083 32.4902 15.925C33.5569 14.3417 34.0902 12.125 34.0902 9.275C34.0902 6.425 33.5569 4.20833 32.4902 2.625C31.4236 1.04167 29.7569 0.25 27.4902 0.25C26.3569 0.25 25.3736 0.458332 24.5402 0.874998C23.7069 1.275 23.0152 1.85833 22.4652 2.625C21.9319 3.39167 21.5319 4.34167 21.2652 5.475C21.0152 6.59167 20.8902 7.85833 20.8902 9.275C20.8902 10.7083 21.0152 11.9833 21.2652 13.1C21.5319 14.2167 21.9319 15.1583 22.4652 15.925C23.0152 16.6917 23.7069 17.2833 24.5402 17.7ZM28.9652 15.3C28.5652 15.5167 28.0736 15.625 27.4902 15.625C26.3236 15.625 25.5069 15.1917 25.0402 14.325C24.5902 13.4583 24.3652 12.275 24.3652 10.775V7.775C24.3652 6.275 24.5902 5.09167 25.0402 4.225C25.5069 3.35833 26.3236 2.925 27.4902 2.925C28.6569 2.925 29.4652 3.35833 29.9152 4.225C30.3819 5.09167 30.6152 6.275 30.6152 7.775V10.75C30.6152 11.5 30.5569 12.1833 30.4402 12.8C30.3402 13.4 30.1652 13.9083 29.9152 14.325C29.6819 14.7417 29.3652 15.0667 28.9652 15.3ZM44.5305 17.7C45.3638 18.1 46.3471 18.3 47.4805 18.3C49.7471 18.3 51.4138 17.5083 52.4805 15.925C53.5471 14.3417 54.0805 12.125 54.0805 9.275C54.0805 6.425 53.5471 4.20833 52.4805 2.625C51.4138 1.04167 49.7471 0.25 47.4805 0.25C46.3471 0.25 45.3638 0.458332 44.5305 0.874998C43.6971 1.275 43.0055 1.85833 42.4555 2.625C41.9221 3.39167 41.5221 4.34167 41.2555 5.475C41.0055 6.59167 40.8805 7.85833 40.8805 9.275C40.8805 10.7083 41.0055 11.9833 41.2555 13.1C41.5221 14.2167 41.9221 15.1583 42.4555 15.925C43.0055 16.6917 43.6971 17.2833 44.5305 17.7ZM48.9555 15.3C48.5555 15.5167 48.0638 15.625 47.4805 15.625C46.3138 15.625 45.4971 15.1917 45.0305 14.325C44.5805 13.4583 44.3555 12.275 44.3555 10.775V7.775C44.3555 6.275 44.5805 5.09167 45.0305 4.225C45.4971 3.35833 46.3138 2.925 47.4805 2.925C48.6471 2.925 49.4555 3.35833 49.9055 4.225C50.3721 5.09167 50.6055 6.275 50.6055 7.775V10.75C50.6055 11.5 50.5471 12.1833 50.4305 12.8C50.3305 13.4 50.1555 13.9083 49.9055 14.325C49.6721 14.7417 49.3555 15.0667 48.9555 15.3ZM64.4457 5.475H64.6957L69.2707 18H73.2957V0.55H70.4957V13.075H70.2457L65.6707 0.55H61.6457V18H64.4457V5.475ZM108.576 0.55H101.951V18H105.226V11.35H108.576C110.276 11.35 111.576 10.8667 112.476 9.9C113.376 8.93333 113.826 7.61667 113.826 5.95C113.826 4.28333 113.376 2.96667 112.476 2C111.576 1.03333 110.276 0.55 108.576 0.55ZM107.901 8.675H105.226V3.225H107.901C108.785 3.225 109.418 3.40833 109.801 3.775C110.185 4.125 110.376 4.69167 110.376 5.475V6.425C110.376 7.20833 110.185 7.78333 109.801 8.15C109.418 8.5 108.785 8.675 107.901 8.675ZM133.041 0.55H122.016V18H133.041V15.3H125.291V10.5H132.766V7.8H125.291V3.25H133.041V0.55ZM141.932 18H145.207V11.225H147.182L150.507 18H154.107L150.382 10.85C151.482 10.6167 152.323 10.0667 152.907 9.2C153.507 8.31667 153.807 7.23333 153.807 5.95C153.807 4.28333 153.357 2.96667 152.457 2C151.557 1.03333 150.257 0.55 148.557 0.55H141.932V18ZM149.782 8.15C149.398 8.5 148.765 8.675 147.882 8.675H145.207V3.225H147.882C148.765 3.225 149.398 3.40833 149.782 3.775C150.165 4.125 150.357 4.69167 150.357 5.475V6.425C150.357 7.20833 150.165 7.78333 149.782 8.15ZM163.372 17.525C164.439 18.0417 165.722 18.3 167.222 18.3C168.272 18.3 169.197 18.1667 169.997 17.9C170.814 17.6333 171.497 17.2583 172.047 16.775C172.597 16.275 173.014 15.6917 173.297 15.025C173.58 14.3417 173.722 13.5917 173.722 12.775C173.722 11.475 173.355 10.4083 172.622 9.575C171.889 8.74167 170.764 8.18333 169.247 7.9L167.422 7.575C166.455 7.40833 165.772 7.15 165.372 6.8C164.972 6.45 164.772 5.94167 164.772 5.275C164.772 3.70833 165.722 2.925 167.622 2.925C168.505 2.925 169.272 3.09167 169.922 3.425C170.572 3.74167 171.13 4.175 171.597 4.725L173.522 2.675C172.922 1.925 172.122 1.33333 171.122 0.9C170.139 0.466666 168.964 0.25 167.597 0.25C165.68 0.25 164.18 0.699999 163.097 1.6C162.014 2.48333 161.472 3.75833 161.472 5.425C161.472 6.64167 161.814 7.7 162.497 8.6C163.18 9.48333 164.33 10.0667 165.947 10.35L167.797 10.65C168.747 10.8 169.422 11.0583 169.822 11.425C170.222 11.775 170.422 12.3 170.422 13C170.422 13.85 170.155 14.5 169.622 14.95C169.089 15.4 168.322 15.625 167.322 15.625C166.455 15.625 165.639 15.45 164.872 15.1C164.122 14.7333 163.422 14.175 162.772 13.425L160.797 15.475C161.464 16.325 162.322 17.0083 163.372 17.525ZM185.787 11.625V18H189.037V11.625L194.712 0.55H191.187L189.137 4.75L187.537 8.325H187.362L185.787 4.75L183.762 0.55H180.112L185.787 11.625ZM204.377 5.475H204.627L209.202 18H213.227V0.55H210.427V13.075H210.177L205.602 0.55H201.577V18H204.377V5.475ZM4.35 27.53H1.425V38H4.35C5.63 38 6.585 37.56 7.215 36.68C7.845 35.8 8.16 34.495 8.16 32.765C8.16 31.035 7.845 29.73 7.215 28.85C6.585 27.97 5.63 27.53 4.35 27.53ZM6.18 36.035C5.76 36.615 5.13 36.905 4.29 36.905H2.685V28.625H4.29C5.13 28.625 5.76 28.915 6.18 29.495C6.61 30.075 6.825 30.895 6.825 31.955V33.575C6.825 34.635 6.61 35.455 6.18 36.035ZM10.5541 36.995V38H17.0341V36.995H14.4241V28.535H17.0341V27.53H10.5541V28.535H13.1641V36.995H10.5541ZM19.9383 38H21.1983V33.53H22.8633L25.4133 38H26.8233L24.1533 33.47C24.9933 33.39 25.6333 33.095 26.0733 32.585C26.5133 32.075 26.7333 31.395 26.7333 30.545C26.7333 29.595 26.4783 28.855 25.9683 28.325C25.4583 27.795 24.7183 27.53 23.7483 27.53H19.9383V38ZM24.9483 32.075C24.6583 32.335 24.2483 32.465 23.7183 32.465H21.1983V28.625H23.7183C24.2483 28.625 24.6583 28.76 24.9483 29.03C25.2483 29.29 25.3983 29.665 25.3983 30.155V30.935C25.3983 31.425 25.2483 31.805 24.9483 32.075ZM35.6824 27.53H29.2324V38H35.6824V36.905H30.4924V33.245H35.5024V32.15H30.4924V28.625H35.6824V27.53ZM39.1566 36.785C39.7866 37.715 40.7416 38.18 42.0216 38.18C42.5016 38.18 42.9166 38.115 43.2666 37.985C43.6166 37.855 43.9166 37.68 44.1666 37.46C44.4166 37.24 44.6266 36.995 44.7966 36.725C44.9666 36.455 45.1166 36.175 45.2466 35.885L44.1666 35.39C44.0766 35.62 43.9716 35.84 43.8516 36.05C43.7316 36.25 43.5866 36.43 43.4166 36.59C43.2566 36.74 43.0616 36.86 42.8316 36.95C42.6116 37.04 42.3416 37.085 42.0216 37.085C41.1916 37.085 40.5716 36.77 40.1616 36.14C39.7616 35.51 39.5616 34.67 39.5616 33.62V31.91C39.5616 30.86 39.7616 30.02 40.1616 29.39C40.5716 28.76 41.1916 28.445 42.0216 28.445C42.3416 28.445 42.6116 28.49 42.8316 28.58C43.0616 28.67 43.2566 28.795 43.4166 28.955C43.5866 29.105 43.7316 29.285 43.8516 29.495C43.9716 29.695 44.0766 29.91 44.1666 30.14L45.2466 29.645C45.1166 29.365 44.9666 29.09 44.7966 28.82C44.6266 28.54 44.4166 28.29 44.1666 28.07C43.9166 27.85 43.6166 27.675 43.2666 27.545C42.9166 27.415 42.5016 27.35 42.0216 27.35C40.7416 27.35 39.7866 27.815 39.1566 28.745C38.5366 29.675 38.2266 31.015 38.2266 32.765C38.2266 34.515 38.5366 35.855 39.1566 36.785ZM51.6007 38V28.625H55.0957V27.53H46.8457V28.625H50.3407V38H51.6007ZM58.6148 37.82C59.0748 38.06 59.6248 38.18 60.2648 38.18C60.9048 38.18 61.4548 38.06 61.9148 37.82C62.3748 37.57 62.7548 37.215 63.0548 36.755C63.3548 36.295 63.5748 35.73 63.7148 35.06C63.8548 34.39 63.9248 33.625 63.9248 32.765C63.9248 31.915 63.8548 31.155 63.7148 30.485C63.5748 29.805 63.3548 29.235 63.0548 28.775C62.7548 28.315 62.3748 27.965 61.9148 27.725C61.4548 27.475 60.9048 27.35 60.2648 27.35C59.6248 27.35 59.0748 27.475 58.6148 27.725C58.1548 27.965 57.7748 28.315 57.4748 28.775C57.1748 29.235 56.9548 29.805 56.8148 30.485C56.6748 31.155 56.6048 31.915 56.6048 32.765C56.6048 33.625 56.6748 34.39 56.8148 35.06C56.9548 35.73 57.1748 36.295 57.4748 36.755C57.7748 37.215 58.1548 37.57 58.6148 37.82ZM61.3298 36.845C61.0398 37.005 60.6848 37.085 60.2648 37.085C59.8448 37.085 59.4898 37.005 59.1998 36.845C58.9098 36.675 58.6698 36.44 58.4798 36.14C58.2898 35.84 58.1498 35.48 58.0598 35.06C57.9798 34.63 57.9398 34.15 57.9398 33.62V31.91C57.9398 31.39 57.9798 30.915 58.0598 30.485C58.1498 30.055 58.2898 29.69 58.4798 29.39C58.6698 29.09 58.9098 28.86 59.1998 28.7C59.4898 28.53 59.8448 28.445 60.2648 28.445C60.6848 28.445 61.0398 28.53 61.3298 28.7C61.6198 28.86 61.8598 29.09 62.0498 29.39C62.2398 29.69 62.3748 30.055 62.4548 30.485C62.5448 30.915 62.5898 31.39 62.5898 31.91V33.62C62.5898 34.15 62.5448 34.63 62.4548 35.06C62.3748 35.48 62.2398 35.84 62.0498 36.14C61.8598 36.44 61.6198 36.675 61.3298 36.845ZM66.409 38H67.669V33.53H69.334L71.884 38H73.294L70.624 33.47C71.464 33.39 72.104 33.095 72.544 32.585C72.984 32.075 73.204 31.395 73.204 30.545C73.204 29.595 72.949 28.855 72.439 28.325C71.929 27.795 71.189 27.53 70.219 27.53H66.409V38ZM71.419 32.075C71.129 32.335 70.719 32.465 70.189 32.465H67.669V28.625H70.189C70.719 28.625 71.129 28.76 71.419 29.03C71.719 29.29 71.869 29.665 71.869 30.155V30.935C71.869 31.425 71.719 31.805 71.419 32.075ZM86.4973 37.82C86.9573 38.06 87.5073 38.18 88.1473 38.18C88.7873 38.18 89.3373 38.06 89.7973 37.82C90.2573 37.57 90.6373 37.215 90.9373 36.755C91.2373 36.295 91.4573 35.73 91.5973 35.06C91.7373 34.39 91.8073 33.625 91.8073 32.765C91.8073 31.915 91.7373 31.155 91.5973 30.485C91.4573 29.805 91.2373 29.235 90.9373 28.775C90.6373 28.315 90.2573 27.965 89.7973 27.725C89.3373 27.475 88.7873 27.35 88.1473 27.35C87.5073 27.35 86.9573 27.475 86.4973 27.725C86.0373 27.965 85.6573 28.315 85.3573 28.775C85.0573 29.235 84.8373 29.805 84.6973 30.485C84.5573 31.155 84.4873 31.915 84.4873 32.765C84.4873 33.625 84.5573 34.39 84.6973 35.06C84.8373 35.73 85.0573 36.295 85.3573 36.755C85.6573 37.215 86.0373 37.57 86.4973 37.82ZM89.2123 36.845C88.9223 37.005 88.5673 37.085 88.1473 37.085C87.7273 37.085 87.3723 37.005 87.0823 36.845C86.7923 36.675 86.5523 36.44 86.3623 36.14C86.1723 35.84 86.0323 35.48 85.9423 35.06C85.8623 34.63 85.8223 34.15 85.8223 33.62V31.91C85.8223 31.39 85.8623 30.915 85.9423 30.485C86.0323 30.055 86.1723 29.69 86.3623 29.39C86.5523 29.09 86.7923 28.86 87.0823 28.7C87.3723 28.53 87.7273 28.445 88.1473 28.445C88.5673 28.445 88.9223 28.53 89.2123 28.7C89.5023 28.86 89.7423 29.09 89.9323 29.39C90.1223 29.69 90.2573 30.055 90.3373 30.485C90.4273 30.915 90.4723 31.39 90.4723 31.91V33.62C90.4723 34.15 90.4273 34.63 90.3373 35.06C90.2573 35.48 90.1223 35.84 89.9323 36.14C89.7423 36.44 89.5023 36.675 89.2123 36.845ZM100.891 27.53H94.2914V38H95.5514V33.245H100.441V32.15H95.5514V28.625H100.891V27.53ZM116.69 27.53H112.88V38H114.14V33.56H116.69C117.66 33.56 118.4 33.295 118.91 32.765C119.42 32.235 119.675 31.495 119.675 30.545C119.675 29.595 119.42 28.855 118.91 28.325C118.4 27.795 117.66 27.53 116.69 27.53ZM116.66 32.465H114.14V28.625H116.66C117.19 28.625 117.6 28.76 117.89 29.03C118.19 29.29 118.34 29.665 118.34 30.155V30.935C118.34 31.425 118.19 31.805 117.89 32.075C117.6 32.335 117.19 32.465 116.66 32.465ZM123.284 33.245H127.364V38H128.624V27.53H127.364V32.15H123.284V27.53H122.024V38H123.284V33.245ZM132.968 37.82C133.428 38.06 133.978 38.18 134.618 38.18C135.258 38.18 135.808 38.06 136.268 37.82C136.728 37.57 137.108 37.215 137.408 36.755C137.708 36.295 137.928 35.73 138.068 35.06C138.208 34.39 138.278 33.625 138.278 32.765C138.278 31.915 138.208 31.155 138.068 30.485C137.928 29.805 137.708 29.235 137.408 28.775C137.108 28.315 136.728 27.965 136.268 27.725C135.808 27.475 135.258 27.35 134.618 27.35C133.978 27.35 133.428 27.475 132.968 27.725C132.508 27.965 132.128 28.315 131.828 28.775C131.528 29.235 131.308 29.805 131.168 30.485C131.028 31.155 130.958 31.915 130.958 32.765C130.958 33.625 131.028 34.39 131.168 35.06C131.308 35.73 131.528 36.295 131.828 36.755C132.128 37.215 132.508 37.57 132.968 37.82ZM135.683 36.845C135.393 37.005 135.038 37.085 134.618 37.085C134.198 37.085 133.843 37.005 133.553 36.845C133.263 36.675 133.023 36.44 132.833 36.14C132.643 35.84 132.503 35.48 132.413 35.06C132.333 34.63 132.293 34.15 132.293 33.62V31.91C132.293 31.39 132.333 30.915 132.413 30.485C132.503 30.055 132.643 29.69 132.833 29.39C133.023 29.09 133.263 28.86 133.553 28.7C133.843 28.53 134.198 28.445 134.618 28.445C135.038 28.445 135.393 28.53 135.683 28.7C135.973 28.86 136.213 29.09 136.403 29.39C136.593 29.69 136.728 30.055 136.808 30.485C136.898 30.915 136.943 31.39 136.943 31.91V33.62C136.943 34.15 136.898 34.63 136.808 35.06C136.728 35.48 136.593 35.84 136.403 36.14C136.213 36.44 135.973 36.675 135.683 36.845ZM144.542 38V28.625H148.037V27.53H139.787V28.625H143.282V38H144.542ZM151.556 37.82C152.016 38.06 152.566 38.18 153.206 38.18C153.846 38.18 154.396 38.06 154.856 37.82C155.316 37.57 155.696 37.215 155.996 36.755C156.296 36.295 156.516 35.73 156.656 35.06C156.796 34.39 156.866 33.625 156.866 32.765C156.866 31.915 156.796 31.155 156.656 30.485C156.516 29.805 156.296 29.235 155.996 28.775C155.696 28.315 155.316 27.965 154.856 27.725C154.396 27.475 153.846 27.35 153.206 27.35C152.566 27.35 152.016 27.475 151.556 27.725C151.096 27.965 150.716 28.315 150.416 28.775C150.116 29.235 149.896 29.805 149.756 30.485C149.616 31.155 149.546 31.915 149.546 32.765C149.546 33.625 149.616 34.39 149.756 35.06C149.896 35.73 150.116 36.295 150.416 36.755C150.716 37.215 151.096 37.57 151.556 37.82ZM154.271 36.845C153.981 37.005 153.626 37.085 153.206 37.085C152.786 37.085 152.431 37.005 152.141 36.845C151.851 36.675 151.611 36.44 151.421 36.14C151.231 35.84 151.091 35.48 151.001 35.06C150.921 34.63 150.881 34.15 150.881 33.62V31.91C150.881 31.39 150.921 30.915 151.001 30.485C151.091 30.055 151.231 29.69 151.421 29.39C151.611 29.09 151.851 28.86 152.141 28.7C152.431 28.53 152.786 28.445 153.206 28.445C153.626 28.445 153.981 28.53 154.271 28.7C154.561 28.86 154.801 29.09 154.991 29.39C155.181 29.69 155.316 30.055 155.396 30.485C155.486 30.915 155.531 31.39 155.531 31.91V33.62C155.531 34.15 155.486 34.63 155.396 35.06C155.316 35.48 155.181 35.84 154.991 36.14C154.801 36.44 154.561 36.675 154.271 36.845ZM164.585 36.605H164.66V38H165.83V32.825H162.455V33.83H164.66V34.91C164.66 35.56 164.47 36.09 164.09 36.5C163.71 36.91 163.18 37.115 162.5 37.115C162.07 37.115 161.705 37.03 161.405 36.86C161.115 36.68 160.875 36.43 160.685 36.11C160.505 35.79 160.375 35.415 160.295 34.985C160.215 34.545 160.175 34.06 160.175 33.53V31.91C160.175 30.86 160.37 30.02 160.76 29.39C161.16 28.76 161.78 28.445 162.62 28.445C162.93 28.445 163.2 28.49 163.43 28.58C163.66 28.67 163.855 28.795 164.015 28.955C164.185 29.105 164.325 29.285 164.435 29.495C164.555 29.695 164.66 29.91 164.75 30.14L165.83 29.645C165.72 29.365 165.58 29.09 165.41 28.82C165.24 28.54 165.025 28.29 164.765 28.07C164.515 27.85 164.21 27.675 163.85 27.545C163.49 27.415 163.065 27.35 162.575 27.35C161.305 27.35 160.365 27.815 159.755 28.745C159.145 29.675 158.84 31.04 158.84 32.84C158.84 34.56 159.115 35.88 159.665 36.8C160.225 37.72 161.075 38.18 162.215 38.18C162.575 38.18 162.885 38.135 163.145 38.045C163.405 37.955 163.625 37.84 163.805 37.7C163.995 37.55 164.15 37.38 164.27 37.19C164.39 37 164.495 36.805 164.585 36.605ZM168.645 38H169.905V33.53H171.57L174.12 38H175.53L172.86 33.47C173.7 33.39 174.34 33.095 174.78 32.585C175.22 32.075 175.44 31.395 175.44 30.545C175.44 29.595 175.185 28.855 174.675 28.325C174.165 27.795 173.425 27.53 172.455 27.53H168.645V38ZM173.655 32.075C173.365 32.335 172.955 32.465 172.425 32.465H169.905V28.625H172.425C172.955 28.625 173.365 28.76 173.655 29.03C173.955 29.29 174.105 29.665 174.105 30.155V30.935C174.105 31.425 173.955 31.805 173.655 32.075ZM182.919 35.015L183.804 38H185.139L181.929 27.53H180.264L177.054 38H178.359L179.244 35.015H182.919ZM181.014 28.865H181.149L182.619 33.92H179.544L181.014 28.865ZM191.043 27.53H187.233V38H188.493V33.56H191.043C192.013 33.56 192.753 33.295 193.263 32.765C193.773 32.235 194.028 31.495 194.028 30.545C194.028 29.595 193.773 28.855 193.263 28.325C192.753 27.795 192.013 27.53 191.043 27.53ZM191.013 32.465H188.493V28.625H191.013C191.543 28.625 191.953 28.76 192.243 29.03C192.543 29.29 192.693 29.665 192.693 30.155V30.935C192.693 31.425 192.543 31.805 192.243 32.075C191.953 32.335 191.543 32.465 191.013 32.465ZM197.637 33.245H201.717V38H202.977V27.53H201.717V32.15H197.637V27.53H196.377V38H197.637V33.245ZM208.341 33.89V38H209.601V33.89L213.216 27.53H211.806L210.306 30.26L209.001 32.645H208.941L207.666 30.26L206.166 27.53H204.726L208.341 33.89Z"
            fill="#1F2937"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
