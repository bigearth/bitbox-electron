/*
 * action types
 */

export const CREATE_WALLET = 'CREATE_WALLET';
export const ADD_ROOT_SEED = 'ADD_ROOT_SEED';
export const ADD_MASTER_PRIVATE_KEY = 'ADD_MASTER_PRIVATE_KEY';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOGGLE_DISPLAY_ACCOUNT = 'TOGGLE_DISPLAY_ACCOUNT';

/*
 * action creators
 */

export function createWallet() {
 return { type: CREATE_WALLET }
}

export function addRootSeed(rootSeed) {
  return { type: ADD_ROOT_SEED, rootSeed }
}

export function addMasterPrivateKey(masterPrivateKey) {
  return { type: ADD_MASTER_PRIVATE_KEY, masterPrivateKey }
}

export function createAccount(account) {
  return { type: CREATE_ACCOUNT, account }
}

export function toggleDisplayAccount(index) {
  return { type: TOGGLE_DISPLAY_ACCOUNT, index }
}