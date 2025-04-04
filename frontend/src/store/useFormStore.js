import {create} from "zustand";
import toast from "react-hot-toast";

export const useFormStore = create((set)=>({
    isLoading: false,
    submitForm: async(data) => {
        try {
            set({ isLoading: true });
            const response = await fetch('http://localhost:8000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            toast.success('Form submitted successfully!');
            return result;

        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            set({ isLoading: false });
        }
    }
}));