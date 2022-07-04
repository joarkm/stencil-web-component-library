import { newSpecPage } from '@stencil/core/testing';
import { SidebarMenu } from './sidebar-menu';

describe('sidebar-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SidebarMenu],
      html: '<sidebar-menu></sidebar-menu>',
    });
    expect(root).toEqualHtml(`
      <sidebar-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sidebar-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SidebarMenu],
      html: `<sidebar-menu first="Stencil" last="'Don't call me a framework' JS"></sidebar-menu>`,
    });
    expect(root).toEqualHtml(`
      <sidebar-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sidebar-menu>
    `);
  });
});
