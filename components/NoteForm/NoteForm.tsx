'use client';

import css from './NoteForm.module.css';

import { useId } from 'react';
import { useRouter } from 'next/router';

export default function NoteForm() {
  const id = useId();
  const router = useRouter();

  function cancelForm() {
    router.back();
  }

  return (
    <form className={css.form}>
      <div className={css.formGroup}>
        <label htmlFor={`${id}-title`}>Title</label>
        <input
          type="text"
          id={`${id}-title`}
          name="title"
          className={css.input}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor={`${id}-content`}>Content</label>
        <textarea
          id={`${id}-content`}
          name="content"
          className={css.textarea}
          rows={8}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor={`${id}-tag`}>Tag</label>
        <select id={`${id}-tag`} name="tag" className={css.select}>
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <button onClick={cancelForm} type="button" className={css.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create note
        </button>
      </div>
    </form>
  );
}
