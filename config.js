module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <123456+cdc-coe-botfrey[bot]@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: {
        extends: ['config:base', ':rebaseStalePrs'],
    },
    labels: ["renovatebot"],
    packageRules: [
        {
            matchPackageNames: ["hashicorp/terraform"],
            groupName: "terraform",
            major: {
                automerge: false,
            },
            minor: {
                automerge: true,
            },
            patch: {
                automerge: true,
            },
            pin: {
                automerge: true,
            },
        }
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    repositories: ['bertrandmbanwi/devops-fully-automated-infra'],
};
