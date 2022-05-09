import { newSpecPage } from '@stencil/core/testing';
import { SegmentedControlGroup } from './segmented-control-group';

describe('segmented-control-group', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SegmentedControlGroup],
      html: '<segmented-control-group></segmented-control-group>',
    });
    expect(root).toEqualHtml(`
      <segmented-control-group>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </segmented-control-group>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SegmentedControlGroup],
      html: `<segmented-control-group first="Stencil" last="'Don't call me a framework' JS"></segmented-control-group>`,
    });
    expect(root).toEqualHtml(`
      <segmented-control-group first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </segmented-control-group>
    `);
  });
});
