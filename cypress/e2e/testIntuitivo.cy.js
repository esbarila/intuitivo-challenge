describe('Intuitivo Developer site Welcome screen', () => {
    beforeEach(() => {
        cy.visit('/reference/welcome')
    })

    it('Checks Title, subtitle and description', () => {
        cy.title().should('eq', 'Welcome 👋')
        cy.get('[id="content"]').find('h1').should('have.text', 'Welcome 👋');
        cy.get('[data-testid="RDMD"]').eq(0).find('p').should('contain.text', 'We envision the future of retail');
        cy.get('[data-testid="RDMD"]').eq(1).find('p').should('contain.text', 'At Intuitivo we are on a mission');
    })

    it('Checks the nav bar', () => {
        cy.get('a[href*="apops"]').contains('APOPs').click();
        cy.get('[id="content"]').find('h1').should('have.text', 'APOPs');
        cy.get('a[href*="get_apops"]').find('span').contains('Get all').should('be.visible');
        cy.get('a[href*="get_apops"]').find('span').contains('Get by ID or QR').should('be.visible');
        
        cy.get('a[href*="get_apops"]').contains('Get all').click();
        cy.get('[id="content"]').find('h1').should('have.text', 'Get all');

        cy.get('a[href*="qrcode-or-id"]').contains('Get by ID or QR').click();
        cy.get('[id="content"]').find('h1').should('have.text', 'Get by ID or QR');
    })

    it('Checks the <Jump To> feature', () => {
        cy.get('#QuickNav-modal-root > section > div.Modal-FocusLock10lbWU4IwTQD').as('jumpToModal');
        cy.get('#QuickNav-modal-root > section > div.Modal-FocusLock10lbWU4IwTQD > nav > ol:nth-child(2) > li:nth-child(2) > a > div').as('apopAnchorModal');
        cy.get('@jumpToModal').should('not.be.visible');
        cy.get('button').contains('JUMP TO').click();
        cy.get('@jumpToModal').should('be.visible');

        cy.get('@apopAnchorModal').should('contain', 'APOPs').and('be.visible');
        cy.get('@jumpToModal').find('input[type="search"]').type('Create transaction');
        cy.get('@jumpToModal').find('a[href*="post_transactions"]').find('div').should('contain', 'Create transaction').and('be.visible');
        cy.get('@apopAnchorModal').should('not.exist');

        cy.get('@jumpToModal').contains('Create transaction').click();
        cy.url().should('contain', 'post_transactions');

        cy.visit('/reference/get_apops'); // just to find a visible <input> to chain type()
        cy.get('#query-getApops_limit').type('{ctrl+/}'); // Keystrokes
        cy.get('.Modal-FocusLock10lbWU4IwTQD').should('be.visible');
    })

    it('Checks the header search bar', () => {
        cy.get('[class*="Header-bottom"]').find('[class="rm-SearchToggle"]').click();
        cy.get('[class*="AlgoliaSearch"]').find('input').type('Authentication');
        cy.get('[class*="SearchResults-list"]').find('span').should('contain', 'Authentication');
        cy.get('[class*="SearchResults-list"]').contains('Authentication').click()
        cy.url().should('contain', 'authentication');

        cy.visit('/reference/get_apops');
        cy.get('#query-getApops_limit').type('{ctrl+k}', { force: true }); // Keystrokes
        cy.get('[class*="AlgoliaSearch"]').should('be.visible');
    })
})
