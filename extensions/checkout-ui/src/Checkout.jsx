
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';

const ALWAYS_ALLOWED = ['VORKASSE2'];

export default () => {
  render(<Extension />, document.body);
};

function Extension() {
  const discountCodes = shopify.discountCodes.value;
  const prev = useRef(/** @type {string[]} */ ([]));
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    const current = discountCodes.map((d) => d.code);

    const promos = current.filter(
      (c) => !ALWAYS_ALLOWED.includes(c.toUpperCase())
    );

    if (promos.length > 1) {
      const newest =
        promos.find((c) => !prev.current.includes(c)) ??
        promos[promos.length - 1];

      promos
        .filter((c) => c !== newest)
        .forEach((c) =>
          shopify.applyDiscountCodeChange({
            type: 'removeDiscountCode',
            code: c,
          })
        );

      setShowMsg(true);
    }

    prev.current = current;
  }, [discountCodes]);

  if (!showMsg) return null;

  return (
    <s-banner
      tone="warning"
      heading="Rabattcode ersetzt!"
      dismissible
      onDismiss={() => setShowMsg(false)}
    >
      <s-text>
        Es kann nur ein Aktionsrabattcode verwendet werden.
        Der vorherige Rabattcode wurde automatisch ersetzt.

      </s-text>
    </s-banner>
  );
}