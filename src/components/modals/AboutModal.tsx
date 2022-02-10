import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source movie name guessing game. 
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Its forked from the original Wordle game -{' '}
        <a
          href="https://github.com/hannahcode/word-guessing-game"
          className="underline font-bold"
          target="_blank" 
          rel="noreferrer"
        >
          check out the original code here
        </a>{' '}
      </p>
      
    </BaseModal>
  )
}
