import { DefaultButton }  from './default_button';
import { InputField } from './input_field';

interface BorrowingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BorrowingModal: React.FC<BorrowingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="modal-content bg-white p-6 rounded-lg z-10">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputField value='返却日' dataName='returnDate'/>
          </div>

          <div>
            <DefaultButton value='借りる' type='submit'/>
            <button
              onClick={onClose}
              className={`w-full border rounded-md bg-while py-1.5 text-sm font-semibold text-gray text-indigo-400 hover:bg-indigo-100 mt-1`}
            >
              閉じる
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
