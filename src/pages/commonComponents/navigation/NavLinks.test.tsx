import { NavLinks } from "./NavLinks";
import { fireEvent, render } from '@testing-library/react';
import { HashRouter } from "react-router-dom";

describe('NavLinks tests', () => {
    const { getByRole } = render(<HashRouter><NavLinks mainContainerClassName="" /></HashRouter>);
    test('change checkbox value', () => {
        const themeChooser = getByRole('checkbox');
        fireEvent.click(themeChooser);
        expect(themeChooser).toHaveProperty('checked', false);
    });
})