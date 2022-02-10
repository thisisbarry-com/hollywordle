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
        <li>- Guess the Hollywood movie in 6 tries.</li>
        <li>- Each guess must be a valid 5 letter word or movie name. E.g. "LOCKE" is a valid guess.</li>
        <li>- Hit the enter button to submit.</li>
        <li>- After each guess, the color of the tiles will change to show how close your guess was to the name.</li>
        <li>- Just like Wordle, each day a new movie show itself.</li>
      </ul>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" status="correct" />
        <Cell value="O" />
        <Cell value="C" />
        <Cell value="K" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="T" status="present" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell value="U" />
        <Cell value="N" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is not in the name in any spot.
      </p>
    </BaseModal>
  )
}
