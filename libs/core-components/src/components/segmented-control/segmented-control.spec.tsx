import { newSpecPage } from '@stencil/core/testing';
import { SegmentedControl } from './segmented-control';

describe('segmented-control', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SegmentedControl],
      html: '<segmented-control></segmented-control>',
    });
    expect(root).toEqualHtml(`
      <segmented-control>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </segmented-control>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SegmentedControl],
      html: `<segmented-control first="Stencil" last="'Don't call me a framework' JS"></segmented-control>`,
    });
    expect(root).toEqualHtml(`
      <segmented-control first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </segmented-control>
    `);
  });
});
