module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <123456+bet-renovate-bot@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: {
        extends: ['config:base', ':rebaseStalePrs'],
    },
    labels: ["renovatebot"],
    packageRules: [
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['minor', 'patch', 'pin', 'digest'],
            automerge: true,
        },
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['major'],
            automerge: false,
        },
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    repositories: ['bertrandmbanwi/devops-fully-automated-infra'],
};
