import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { ThemeSwitchContext } from '@/contexts/ThemeSwitchContext';
import axios from 'axios';

export default function HireMeButton() {
  const { language } = useContext(LangSwitchContext);
  const { theme } = useContext(ThemeSwitchContext);
  const handleClick = async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',

      customClass: {
        popup:
          '!bg-white dark:!bg-dark-background !text-[#1F2937] dark:!text-dark-heading rounded-lg shadow-lg p-6',
      },

      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'You must enter a message!';
        }
      },
    });

    if (text) {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', { message: text })
        .then((response) => {
          toast.success('Message sent successfully!', { theme: theme });
        })
        .catch((error) =>
          toast.error('Failed to send message. Please try again.', {
            theme: theme,
          }),
        );
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-soft bg-[#3730A3] dark:bg-dark-cta-button-bg dark:text-button-text lg:text-lg lg:px-8 lg:py-6"
    >
      {language === 'en' ? 'Hire Me' : 'İletişime Geç'}
    </button>
  );
}
