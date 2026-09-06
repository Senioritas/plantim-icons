# Plantim navigation contract

`registry.json` is the single source of truth for shared product navigation
surfaces. It is intentionally separate from the icon registry:

- the icon registry owns canonical geometry;
- this registry owns product meaning and placement;
- generated Vue and Swift adapters expose the same surface-to-icon mapping.

Change a surface icon only after reviewing both platform galleries. The
generator rejects unregistered icon IDs, and CI compares the generated product
contract hash in both adapters.
