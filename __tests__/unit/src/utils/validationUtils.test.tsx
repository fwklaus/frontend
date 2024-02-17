/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
   isValidPhoneNumber, isValidRestaurantName, isValidStreet,
   isValidCity, isValidState, isValidZip,
   isValidEmail, isValidPassword, isValidValidator,
   isNotEmpty, getStateCode, formatPhone,
   validZipPattern, validStreetPattern, validCityPattern,
   validEmailPattern, validNumPattern
 } from '../../../../src/utils/validationUtils';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

const maxLengthTest = (string) => {
  it("should not be greater than 225 characters", () => {
    const MaxLengthString = Array(225).fill('a').join('');
    const MaxLengthPlusOne = MaxLengthString + 'a';

    expect(isNotEmpty(MaxLengthString)).toBe(true);
//     expect(inValidRange(MaxLengthPlusOne)).toBe(false);
  });
}

describe("isValidPhoneNumber Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validNum = "(719)597-8918";
    let result1 = isValidPhoneNumber(emptyText);
    let result2 = isValidPhoneNumber(validNum);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

  it("should have a length of 10", () => {
    let nineNumbers = '123456789';
    let tenNumbers = '1234567890';
    let elevenNumbers = '12345678901';

    let result1 = isValidPhoneNumber(nineNumbers);
    let result2 = isValidPhoneNumber(tenNumbers);
    let result3 = isValidPhoneNumber(elevenNumbers);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
    expect(result3).toBe(false);
  });

  it("should allow digits", () => {
    let validDigits = '1234567890';
    let invalidDigits = '123abc7890';

    let result1 = isValidPhoneNumber(validDigits);
    let result2 = isValidPhoneNumber(invalidDigits);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  it("should allow parentheses and dashes", () => {
    let validSpecialChars1 = '(719)5978918';
    let validSpecialChars2 =  '(719)597-8918';
    let validSpecialChars3 = ')))))7()(1))(9)5-97-891---8';
    let invalidChars1 = '<719>5978918';
    let invalidChars2 = '719 597 8918';
    let invalidChars3 = '719.597.8918';

    let validResults = {
      result1: isValidPhoneNumber(validSpecialChars1),
      result2: isValidPhoneNumber(validSpecialChars2),
      result3: isValidPhoneNumber(validSpecialChars3),
    }

    let invalidResults = {
      result1: isValidPhoneNumber(invalidChars1),
      result2: isValidPhoneNumber(invalidChars2),
      result3: isValidPhoneNumber(invalidChars3),
    }

    Object.keys(validResults).forEach((result) => {
      expect(validResults[result]).toBe(true);
    });

    Object.keys(invalidResults).forEach((result) => {
      expect(invalidResults[result]).toBe(false);
    });
  });
});

describe("isValidRestaurantName Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validName = "The Red Table";
    let result1 = isValidRestaurantName(emptyText);
    let result2 = isValidRestaurantName(validName);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

  it("should return false given a string greater than 225 characters", () => {
  });
});

describe("isValidStreet Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validStreet = "5555 Elm Street";
    let result1 = isValidStreet(emptyText);
    let result2 = isValidStreet(validStreet);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

  it.todo("should not be greater than 225 characters");
  it.todo("should allow all letter characters");
  it.todo("should allow all number characters");
  it.todo("should allow periods, commas, hash, ampersand, whitespace and dash characters");
});

describe("isValidCity Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validCity = "Denver";
    let result1 = isValidCity(emptyText);
    let result2 = isValidCity(validCity);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

  it.todo("should not be greater than 225 characters");
  it.todo("should allow all letter characters");
  it.todo("should allow apostrophe, period, dash, and whitespace characters");
});

describe("isValidState Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validState = "Colorado";
    let result1 = isValidState(emptyText);
    let result2 = isValidState(validState);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

  it.todo("should not be greater than 225 characters");
  it.todo("should be a valid state code or full state name");
});

describe("isValidZip Tests", () => {
  it("should return false given an empty string", () => {
    let emptyText = '';
    let validZip = "80903";
    let result1 = isValidZip(emptyText);
    let result2 = isValidZip(validZip);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

   it.todo("should not be greater than 5 characters");
   it.todo("should only allow digits");
});

describe("isValidPassword Tests", () => {
  it("should return false given an empty string", () => {
    let merchant = {
      email: "test@email.com",
    }

    let emptyText = '';
    let validPassword = "secret123";
    let result1 = isValidPassword(emptyText, merchant);
    let result2 = isValidPassword(validPassword, merchant);

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });

   it.todo("should not be greater than 225 characters");
   it.todo("should not be the same as the email for a given merchant");
});

describe("isValidEmail Tests", () => {



//   maxLengthTest();
   it.todo("should not be the same as the password for a given merchant");
   it.todo("should be unique");
   it.todo("should have a length greater than 4");
   it.todo("should have a valid email pattern");
});

describe("isValidValidator Tests", () => {
//   emptyStringTest(isValidValidator);

  it.todo("should not be greater than 225 characters");
  it.todo("should be the same as the password for a given merchant");
});

describe("isNotEmpty Tests", () => {
  it.todo("should take an argument greater than length 0");
  it.todo("should not take an argument greater than length 225");
});

describe("getStateCode Tests", () => {
  it.todo("should take a full state name and return the state code");
});

describe("formatPhone Tests", () => {
  it.todo("should return a string of digit characters given a string of valid phone number characters");
});

describe("validZipPattern Tests", () => {
  it.todo("should return true when given a string containing 5 string digits");
});

describe("validStreetPattern Tests", () => {
  it.todo("should allow all letter characters");
  it.todo("should allow all number characters");
  it.todo("should allow periods, commas, hash, ampersand, whitespace and dash characters");
});

describe("validCityPattern Tests", () => {
  it.todo("should allow all letter characters");
  it.todo("should allow apostrophe, period, dash, and whitespace characters");
});

describe("validEmailPattern Tests", () => {
   it.todo("should return true if given a valid email pattern");
});

describe("validNumPattern Tests", () => {
  it.todo("should have a length of 10");
  it.todo("should allow digits");
  it.todo("should allow parentheses and dashes");
});
