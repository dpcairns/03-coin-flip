// IMPORT MODULES under test here:
import { makeCatBox } from '../utils.js';

const test = QUnit.test;

test('should make a cat box', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const parameter = {
        name: 'Garfield',
        weight: 7,
        url: 'http://placekitten.com/200/200'
    };
    
    const expected = '<div class="cat-box"><h2>Garfield</h2><img src="http://placekitten.com/200/200"><p><span class="weight">7</span></p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualElement = makeCatBox(parameter);

    const elementAsString = actualElement.outerHTML;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(elementAsString, expected);
});
