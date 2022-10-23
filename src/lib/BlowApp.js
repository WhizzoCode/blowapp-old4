import {LitElement, css, html} from 'lit';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    sl-split-panel,
    sl-split-panel > div {
      height: 100%;
    }

    sl-split-panel > div:nth-child(1) {
      background: var(--sl-color-neutral-50);
      padding: var(--sl-spacing-medium) 0;
    }

    sl-split-panel > div:nth-child(2) {
      background: var(--sl-color-neutral-0);
    }

    sl-tree-item::part(label) {
      font-size: var(0.2em);
    }
  `;

  render() {
    return html`
      <sl-split-panel position-in-pixels="300" snap="300px">
        <div slot="start">
          <sl-tree>
            <sl-tree-item>
              Niles
              <sl-tree-item>
                01
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                02
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                03
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                04
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                05
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                06
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                07
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                08
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                09
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
              <sl-tree-item>
                10
                <sl-tree-item>01</sl-tree-item><sl-tree-item>02</sl-tree-item><sl-tree-item>03</sl-tree-item>
                <sl-tree-item>04</sl-tree-item><sl-tree-item>05</sl-tree-item><sl-tree-item>06</sl-tree-item>
                <sl-tree-item>07</sl-tree-item><sl-tree-item>08</sl-tree-item><sl-tree-item>09</sl-tree-item>
                <sl-tree-item>10</sl-tree-item><sl-tree-item>11</sl-tree-item><sl-tree-item>12</sl-tree-item>
                <sl-tree-item>13</sl-tree-item><sl-tree-item>14</sl-tree-item><sl-tree-item>15</sl-tree-item>
                <sl-tree-item>16</sl-tree-item><sl-tree-item>17</sl-tree-item><sl-tree-item>18</sl-tree-item>
                <sl-tree-item>19</sl-tree-item><sl-tree-item>20</sl-tree-item><sl-tree-item>21</sl-tree-item>
                <sl-tree-item>22</sl-tree-item><sl-tree-item>23</sl-tree-item><sl-tree-item>24</sl-tree-item>
                <sl-tree-item>25</sl-tree-item><sl-tree-item>26</sl-tree-item><sl-tree-item>27</sl-tree-item>
                <sl-tree-item>28</sl-tree-item><sl-tree-item>29</sl-tree-item><sl-tree-item>30</sl-tree-item>
              </sl-tree-item>
            </sl-tree-item>
    
            <sl-tree-item>
              Rita
              <sl-tree-item>Cedar</sl-tree-item>
              <sl-tree-item>Pine</sl-tree-item>
              <sl-tree-item>Spruce</sl-tree-item>
            </sl-tree-item>
    
            <sl-tree-item>
              Larry
              <sl-tree-item>Bamboo</sl-tree-item>
              <sl-tree-item>Cactus</sl-tree-item>
              <sl-tree-item>Fern</sl-tree-item>
            </sl-tree-item>

            <sl-tree-item>
              Cliff
              <sl-tree-item>Bamboo</sl-tree-item>
              <sl-tree-item>Cactus</sl-tree-item>
              <sl-tree-item>Fern</sl-tree-item>
            </sl-tree-item>
          </sl-tree>
        </div>
        <!-- <panel-tree slot="start"></panel-tree> -->
        <div slot="end">

        </div>
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-app', BlowApp);
