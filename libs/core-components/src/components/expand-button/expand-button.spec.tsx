import { newSpecPage } from '@stencil/core/testing';
import { ExpandButton } from './expand-button';

describe('expand-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ExpandButton],
      html: '<expand-button></expand-button>',
    });
    expect(root).toEqualHtml(`
      <expand-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </expand-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ExpandButton],
      html: `<expand-button first="Stencil" last="'Don't call me a framework' JS"></expand-button>`,
    });
    expect(root).toEqualHtml(`
      <expand-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </expand-button>
    `);
  });
});
