import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer id="footer" className="py-4 text-2xl flex justify-center text-center font-primary items-center bg-palette-lighter flex-wrap">
      {/* Built with <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{' '}
      <a
        href="https://twitter.com/deepwhitman"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        Nick Giegerich
        </a> */}
        For all custom orders please contact <a href="tel:7756216811" className="text-palette-primary font-bold px-1"> 775-621-6811</a>
    </footer>
  )
}

export default Footer
