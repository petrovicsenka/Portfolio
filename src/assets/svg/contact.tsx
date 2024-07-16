interface Props {
  className?: string;
  // width?: string;
  // height?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
    >
      <style type='text/css'>{`.st0{fill:#231F20;}`}</style>
      <g>
        <circle className='st0' cx='256' cy='217.6' r='25.6' />
        <circle className='st0' cx='358.4' cy='217.6' r='25.6' />
        <circle className='st0' cx='153.6' cy='217.6' r='25.6' />
        <path
          className='st0'
          d='M435.2,12.8H76.8C34.4,12.8,0,47.2,0,89.6v384c0,9.2,5,17.8,13.1,22.3c3.8,2.2,8.2,3.3,12.6,3.3
          c4.6,0,9.1-1.2,13.1-3.6l115-69.6c4.3-2.5,9.1-3.8,14.1-3.6h267.5c42.4,0,76.8-34.4,76.8-76.8v-256C512,47.2,477.6,12.8,435.2,12.8
          z M460.8,345.6c0,14.1-11.5,25.6-25.6,25.6H167.7c-14,0-27.7,3.8-39.7,11l-76.8,46.1V89.6C51.2,75.5,62.7,64,76.8,64h358.4
          c14.1,0,25.6,11.5,25.6,25.6V345.6z'
        />
      </g>
    </svg>
  );
};
