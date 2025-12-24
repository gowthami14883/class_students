function sortPermissions(data) {
  return [...data].sort((a, b) => {
    // push nulls to end
    if (a === null) return 1;
    if (b === null) return -1;

    const aPerm =
      a.module_permissions?.[0] ||
      a.module_operation_permissions?.[0] ||
      {};

    const bPerm =
      b.module_permissions?.[0] ||
      b.module_operation_permissions?.[0] ||
      {};

    // compare keys in ascending order
    const keys = [
      "org_title_id",
      "module_title_id",
      "module_operation_title_id"
    ];

    for (let key of keys) {
      const valA = aPerm[key] || "";
      const valB = bPerm[key] || "";

      if (valA !== valB) {
        return valA.localeCompare(valB);
      }
    }

    return 0;
  });
}

module.exports = sortPermissions;
