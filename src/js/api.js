import data from './data';

export const getAllChats = (callback = () => {}) => {
  const response = data.chats;
  callback(response);
  return response;
}

export const getSteps = (callback = () => {}) => {
  const response = data.steps
  callback(response)
  return response
}

export const getFaqs = (callback = () => {}) => {
  const response = data.faqs
  callback(response)
  return response.splice(0,2)
}

export const getCurrentStep = (callback = () => {}) => {
  const response = data.currentStep
  callback(response)
  return response
} 