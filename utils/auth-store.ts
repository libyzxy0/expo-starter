import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

type ActionsState = {
  login: (username: string, password: string) => void;
  logout: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

type AuthState = {
  isLoggedIn: boolean;
  hasCompletedOnboarding: boolean;
  actions: ActionsState;
};

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      isLoggedIn: false,
      hasCompletedOnboarding: false,
      actions: {
        login: (username: string, password: string) => {
          if (!username) {
            throw new Error("Please enter your username or email.");
          }
          if (!password) {
            throw new Error("Please enter your password.");
          }
          set(state => {
            return {
              ...state,
              isLoggedIn: true
            };
          });
        },
        logout: () => {
          console.log("Logging out!");
          set(state => {
            return {
              ...state,
              isLoggedIn: false
            };
          });
        },
        completeOnboarding: () => {
          set(state => {
            return {
              ...state,
              hasCompletedOnboarding: true
            };
          });
        },
        resetOnboarding: () => {
          set(state => {
            return {
              ...state,
              hasCompletedOnboarding: false
            };
          });
        }
      }
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync
      })),
    }
  )
);

export const useAuthActions = () => useAuthStore(state => state.actions);
