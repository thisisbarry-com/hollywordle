import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <ul className="text-sm text-gray-500 dark:text-gray-300">
        <li>- Guess the bollywood movie name in 6 tries.</li>
        <li>- Each guess must be a valid 5 letter movie name.</li>
        <li>- Movie names with special characters and/or space are not allowed E.g. 'Mr. X', 'Dil Se'</li>
        <li>- Hit the enter button to submit.</li>
        <li>- Consider official full name of movie E.g. 'Dahek The Burning Passion' instead of 'Dahek'.</li>
        <li>- After each guess, the color of the tiles will change to show how close your guess was to the name.</li>
        <li>- Just like popular Wordle, each day new movie name will be available.</li>
      </ul>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="U" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter G is in the name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="A" />
        <Cell value="H" status="present" />
        <Cell value="E" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter H is in the name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="J" status="absent" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is not in the name in any spot.
      </p>
    </BaseModal>
  )
}
