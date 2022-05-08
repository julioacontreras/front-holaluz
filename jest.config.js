module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "ts",
    "vue"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },  
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.(ts)$': 'ts-jest'
  } 
}
